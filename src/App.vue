<template>
  <div>
    <site-header title="Dividends tracker"/>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand"/>
  </div>
</template>

<script>
//import PortfolioChart from './components/PortfolioChart'
import SiteHeader from './components/SiteHeader'

export default {
  name: "App",
  components: {
    //PortfolioChart,
    SiteHeader
  },
};
</script>

<style>
* {
  font-family: Quicksand;
  font-style: normal;
}
</style>
