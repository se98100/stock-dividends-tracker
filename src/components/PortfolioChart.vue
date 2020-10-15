<template>
    <div id="portfolioChart">
        <canvas id="pChartCanvas"/>
    </div>
</template>

<script>
import Chart from 'chart.js'
import 'chartjs-plugin-crosshair'
import Config from '../../config'
import Data from '../../data'

export default {
    methods: {
        renderChart() {
            var investment = 0;
            for(var i=0; i<Data.length; i++) {
                investment += Data[i].price * Data[i].shares;
            }

            var oldest = {
                index: 0,
                date: 0
            };
            for(let i=0; i<Data.length; i++) {
                var date = Date.parse(Data[i].date);
                if(oldest.date == 0 || date < Date.parse(oldest.date)) {
                    oldest.date = Data[i].date;
                    oldest.index = i;
                }
            }

            var diff = Date.now() - Date.parse(oldest.date);
            var seriesName = '';
            if(diff < 86400*100*1000) {
                seriesName = 'Time Series (Daily)';
            } else if (diff < 86400*7*100*1000) {
                seriesName = 'Weekly Time Series';
            }

            var promises = [];
            var gains = [];
            for(let i=0; i<Data.length; i++) {
                promises.push(
                    this.getCachedData(Data[i].sym, seriesName)
                    .then(function(obj){
                        gains[i] = {};
                        for(const [key, value] of Object.entries(obj)) {
                            if(Date.parse(key) >= Date.parse(Data[i].date))
                                gains[i][key] = (parseFloat(value['4. close']) - Data[i].price) * Data[i].shares;
                            else break;
                        }
                    })
                );
            }

            var datachart = [];
            var labels = [];
            var index = -1;
            Promise.all(promises)
            .then(() => {
                for(const date in gains[oldest.index]) {
                    datachart[++index] = 0;
                    labels[index] = date;
                    for(var i=0; i<gains.length; i++) {
                        if(gains[i][date] != undefined)
                            datachart[index] += gains[i][date];
                    }
                }
            })
            .then(() => {
                datachart = datachart.reverse();
                labels = labels.reverse();
            })
            .then(() => {
                var ctx = document.getElementById("pChartCanvas").getContext("2d");
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Performance',
                            cubicInterpolationMode: 'monotone',
                            fill: true,
                            data: datachart,
                            borderColor: '#003459',
                            borderWidth: 4,
                            backgroundColor: 'rgba(0, 52, 89, .2)',
                            pointHoverBackgroundColor: '#FFFFFF',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 5
                        }]
                    },
                    options: {
                        tooltips: {
                            mode: "interpolate",
                            intersect: false,
                            displayColors: false,
                            caretPadding: 5,
                            titleFontFamily: "Quicksand",
                            titleFontSize: 15,
                            bodyFontSize: 13,
                            bodyFontFamily: "Quicksand",
                            backgroundColor: "rgba(0,23,31,0.8)",
                            callbacks: {
                                title: function () {
                                    return 'Gains:';
                                },
                                label: function (i) {
                                    var gain = i.yLabel.toFixed(2);
                                    return [
                                        (gain >= 0 ? '+' + gain : gain) + ' USD',
                                        ((gain * 100) / investment).toFixed(2) + " %",
                                        '----------------',
                                        i.xLabel
                                    ];
                                }
                            }
                        },
                        hover: {
                            intersect: false
                        },
                        plugins: {
                            crosshair: {
                                line: {
                                    color: "#00171F",
                                    width: 1,
                                    dashPattern: [15,15]
                                }
                            }
                        },
                        elements: {
                            point: {
                                radius: 0
                            }
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    display: false
                                },
                                offset: true
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    display: false
                                }
                            }]
                        }
                    }
                });
            });
        },
        getLatestData(seriesName, obj) {
            //It's better to "waste" an API call than calculate latest data due to market close days
            if(obj[seriesName] == undefined) {
                obj[seriesName] = {
                    "latest": {
                        "fetched": "0",
                    }
                }
            }

            var fetched = new Date(parseInt(obj[seriesName]["latest"]["fetched"]));
            var dayFetched = new Date(fetched);
            dayFetched.setHours(0,0,0);
            var current = new Date();
            current.setHours(0,0,0);
            if(dayFetched.toString() == current.toString() && (fetched.getHours() >= 22 || new Date().getHours() < 22)) {
                return new Promise((res) =>{
                    res({
                        value: obj[seriesName]["latest"]["value"],
                        updated: false
                    });
                });
            }

            var str = '';
            if(seriesName == 'Time Series (Daily)')
                str = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=' + Config.alphaKey;
            else if (seriesName == 'Weekly Time Series')
                str = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=' + Config.alphaKey;
            
            function sleep(ms) {
                return new Promise((res) => {
                    setTimeout(res, ms);
                })
            }
            function f() {
                return fetch(str)
                .then(function(res) { return res.json() })
                .then(function(o) {
                    if(o[seriesName] == undefined)
                        return sleep(2000).then(() => { return f() });
                    return {
                        value: Object.keys(o[seriesName])[0],
                        updated: true
                    }
                });
            }
            return f();
        },
        getCachedData(sym, seriesName) {
            var o = JSON.parse(localStorage.getItem('cache'));
            if(o == undefined)
                o = {};
            if(o[sym] == undefined)
                o[sym] = {};

            return this.getLatestData(seriesName, o[sym])
            .then(latest => {
                if(latest.updated){
                    o[sym][seriesName]["latest"]["fetched"] = Date.now();
                    o[sym][seriesName]["latest"]["value"] = latest.value;
                }

                if(o[sym][seriesName]["data"] == undefined) {
                    o[sym][seriesName]["data"] = {}
                }

                function loadInCache() {
                    var curr = JSON.parse(localStorage.getItem('cache'));
                    if(curr != undefined){
                        curr[sym] = o[sym];
                        localStorage.setItem("cache", JSON.stringify(curr));
                    } else 
                        localStorage.setItem("cache", JSON.stringify(o));
                }
                
                if(latest.value == Object.keys(o[sym][seriesName]["data"])[0]) {
                    loadInCache();
                    return o[sym][seriesName]["data"];
                }

                var str = '';
                if(seriesName == 'Time Series (Daily)')
                    str = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' 
                        + sym + '&apikey=' + Config.alphaKey;
                else if (seriesName == 'Weekly Time Series')
                    str = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=' 
                        + sym + '&apikey=' + Config.alphaKey;

                function sleep(ms) {
                    return new Promise((res) => {
                        setTimeout(res, ms);
                    })
                }
                function f() {
                    return fetch(str)
                    .then(function(res){
                        return res.json();
                    })
                    .then(function(res){
                        if(res[seriesName] == undefined)
                            return sleep(2000).then(() => { return f(); });
                        o[sym][seriesName]["data"] = res[seriesName];
                        loadInCache();
                        return res[seriesName];
                    })
                }
                return f();
            })
        }
    },
    mounted() {
        this.renderChart();
    }
}
</script>

<style scoped>
    #portfolioChart {
        position: relative;
        width: 700px;
        height: 280px;
        left: 30px;
        top: 30px;

        border: 1px solid rgba(0, 52, 89, 0.03);
        box-shadow: 4px 4px 10px rgba(0, 52, 89, 0.25);
        border-radius: 13px;
    }

    #pChartCanvas {
        width: 712px !important;
        height: 290px !important;
        margin-left: -11px;
    }
</style>