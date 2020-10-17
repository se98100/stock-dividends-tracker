<template>
  <div>
    <site-header title="Dividends tracker"/>
    <div class="container pt-4">
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-5">
            <div class="tile is-child box p-0">
              <portfolio-chart/>
            </div>
          </div>
          <yield-chart/>
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
import YieldChart from './components/YieldChart'

export default {
  name: "App",
  components: {
    PortfolioChart,
    SiteHeader,
    YieldChart
  },
};
</script>

<style>
* {
  font-family: Quicksand;
  font-style: normal;
}
</style>
