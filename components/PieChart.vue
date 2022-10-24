<template>
    <div id="chart">
      <apexchart type="pie" width="375" :options="chartOptions" :series="series"> </apexchart>
    </div>
</template>
<script>
  export default {
    name: 'PieChart',
    data () {
      return {
        series: [44, 55, 13, 43, 22],
        chartOptions: {
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      }
    }
  }
</script>