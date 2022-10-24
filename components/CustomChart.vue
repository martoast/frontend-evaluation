<template>
    <div id="chart">
      <apexchart type="pie" width="375" :options="chartOptions" :series="series"> </apexchart>
    </div>
</template>
<script>
  export default {
    name: 'CustomChart',
    props: ["type", "width", "chartOptions", "series"],
  }
</script>