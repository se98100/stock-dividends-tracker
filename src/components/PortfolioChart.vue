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
                    backgroundColor: 'rgba(0, 52, 89, .4)'
                }]
            },
            options: {
                elements: {
                    point: {
                        radius: 0
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 0
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
                            display: false
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
        width: 711px !important;
        height: 380px !important;
        margin-left: -10px;
        margin-top: -4px;
    }
</style>