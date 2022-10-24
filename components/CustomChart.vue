<template>
    <div id="chart">
      <apexchart :type="type" :width="width" :options="chartOptions" :series="series"> </apexchart>
    </div>
</template>
<script>
  export default {
    name: 'CustomChart',
    props: ["type", "width", "chartOptions", "series"],
  }
</script>