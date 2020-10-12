<template>
    <div id="portfolioChart">
        <canvas id="pChartCanvas"/>
    </div>
</template>

<script>
import Chart from 'chart.js'

export default {
    data() {
        return {
            chartdata: [10,5,-10]
        }
    },
    mounted() {
        var ctx = document.getElementById("pChartCanvas").getContext("2d");
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1,2,3],
                datasets: [{
                    label: 'This week',
                    cubicInterpolationMode: 'monotone',
                    fill: true,
                    data: this.chartdata,
                    borderColor: '#003459',
                    backgroundColor: 'rgba(0, 52, 89, .4)'
                }]
            },
            options: {
                layout: {
                    padding: {
                        right: 4,
                        left: 5
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: "transparent",
                            display: true,
                            drawBorder: false,
                            zeroLineColor: "#ccc",
                            zeroLineWidth: 1
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
                            display: false,
                            padding: 100
                        }
                    }]
                }
            }
        })
    }
}
</script>

<style scoped>
    #portfolioChart {
        position: relative;
        width: 700px;
        height: 360px;
        left: 50px;
        top: 50px;

        border: 1px solid rgba(0, 52, 89, 0.03);
        box-shadow: 4px 4px 10px rgba(0, 52, 89, 0.25);
        border-radius: 13px;
    }

    #pChartCanvas {
        padding-top: 10px;
        width: 710px !important;
        margin-left: -10px;
    }
</style>