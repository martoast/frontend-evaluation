<template>
  <div id="app">
    <div id="chart">
      
    </div>
    <dashboard :id="'dashExample'">
      <dash-layout ref="dashLayout" v-for="layout in dlayouts" v-bind="layout" :debug="true" :key="layout.breakpoint">
        <dash-item v-for="item in layout.items" v-bind.sync="item" v-on:moveEnd="moveEnd" :key="item.id">
          <div class="content">
            <apexchart width="375" height="275" type="bar" :options="chartOptions" :series="series"></apexchart>
          </div>
        </dash-item>
      </dash-layout>
    </dashboard>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dlayouts: [
        {
          breakpoint: "xl",
          numberOfCols: 12,
          items: [
            { id: "1", x: 0, y: 0, width: 1, height: 1 },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
          ]
        },
        {
          breakpoint: "lg",
          breakpointWidth: 1200,
          numberOfCols: 10,
          items: [
            { id: "1", x: 0, y: 0, width: 3, height: 2 },
            { id: "2", x: 1, y: 0, width: 3, height: 2 },
          ]
        },
        {
          breakpoint: "md",
          breakpointWidth: 996,
          numberOfCols: 8,
          items: [
            { id: "1", x: 0, y: 0, width: 1, height: 1 },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
          ]
        },
      ],
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }
      ]
    };
  },
  methods: {
    moveEnd() {
      this.$nextTick(() => {
        this.$refs.dashLayout[0].placeholderY = this.maxY + this.maxH;
      });
    },
  }
};
</script>

<style>
.content {
  height: 100%;
  width: 100%;
  border: 2px solid #42b983;
  border-radius: 5px;
}
</style>
