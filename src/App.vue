<template>
  <div>
    <site-header title="Dividends tracker" header-height="55px"/>
    <div id="content">
      <portfolio-chart/>
    </div>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand">
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader';
import PortfolioChart from './components/PortfolioChart'

export default {
  name: 'App',
  components: {
    SiteHeader,
    PortfolioChart
  }
}
</script>

<style>
  * {
    font-family: Quicksand;
    font-style: normal;
  }

  #content {
    height: 100%;
    margin-top: 55px;
  }
</style>
