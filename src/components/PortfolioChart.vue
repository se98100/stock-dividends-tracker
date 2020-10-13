<template>
    <div id="portfolioChart">
        <canvas id="pChartCanvas"/>
    </div>
</template>

<script>
import Chart from 'chart.js'
import 'chartjs-plugin-crosshair'

export default {
    data() {
        return {
            chartdata: [-98, -97, -96, -94, -91, -89, -80, -78, -77, -76, -72, -71, -67, -66, -56, -55, -54, -52, -45, -38, -37, -36, -32, -26, -17, -16, -3, 2, 9, 11, 15, 24, 31, 36, 40, 43, 44, 49, 53, 55, 56, 65, 69, 72, 78, 79, 89, 97, 98, 100]
        }
    },
    mounted() {
        var ctx = document.getElementById("pChartCanvas").getContext("2d");
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [42, 23, 36, 7, 49, 45, 34, 46, 30, 11, 28, 3, 1, 14, 18, 38, 39, 20, 33, 15, 24, 16, 13, 31, 48, 5, 50, 25, 10, 35, 26, 2, 6, 17, 43, 41, 12, 37, 27, 32, 4, 9, 47, 8, 40, 21, 44, 29, 22, 19],
                datasets: [{
                    label: 'Performance',
                    cubicInterpolationMode: 'monotone',
                    fill: true,
                    data: this.chartdata,
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
                    callbacks: {
                        title: function () {
                            return 'Gains:';
                        },
                        label: function (i) {
                            var gain = i.yLabel.toFixed(2);
                            return (
                                parseFloat(gain) >= 0 ? '+' + gain : gain
                            );
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