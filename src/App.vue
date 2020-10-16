<template>
  <div>
    <site-header title="Dividends tracker"/>
    <div class="container">
    <div class="tile is-ancestor my-ancestor">
      <div class="tile is-vertical">
        <div class="tile is-parent is-5">
          <div class="tile is-child box chart-box">
            <portfolio-chart/>
          </div>
        </div>
      </div>
    </div>
    </div>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand"/>
  </div>
</template>

<script>
import PortfolioChart from './components/PortfolioChart'
import SiteHeader from './components/SiteHeader'

export default {
  name: "App",
  components: {
    PortfolioChart,
    SiteHeader
  },
};
</script>

<style>
* {
  font-family: Quicksand;
  font-style: normal;
}

.my-ancestor {
  margin-top: 0.75em !important;
}

.chart-box {
  padding: 0 !important;
}
</style>
