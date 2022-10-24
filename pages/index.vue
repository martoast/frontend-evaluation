<template>
  <div id="app">
    <b-btn @click="onAddChart">Add chart</b-btn>
    <dashboard :id="'dashExample'">
      <dash-layout ref="dashLayout" v-for="layout in dlayouts" v-bind="layout" :debug="true" :key="layout.breakpoint">
        <dash-item v-for="item in dashItems" v-bind.sync="item" v-on:moveEnd="moveEnd" :key="item.id">
          <div class="content">
            <b-btn @click="onDeleteChart(item)">Delete</b-btn>
            <custom-chart :chartOptions="item.data.chartOptions" :series="item.data.series" :type="item.data.type" :width="item.data.width"></custom-chart>
          </div>
        </dash-item>
      </dash-layout>
    </dashboard>
  </div>
</template>

<script>
import PieChart from '../components/PieChart.vue';
import BarChart from '../components/BarChart.vue';
import CustomChart from '../components/CustomChart.vue';
export default {
  name: "App",
  components: {
    PieChart,
    BarChart,
    CustomChart

  },
  data() {
    return {
      dashItems: [
      { id: "0", x: 0, y: 0, width: 3, height: 2, data: {
        type: 'bar',
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
      }
    },
    { id: "1", x: 0, y: 0, width: 3, height: 2, 
        data: {
          type: "pie",
          series: [44, 55, 13, 43, 22],
          width:"375",
          chartOptions: {
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
          }
        }
    },
    { id: "2", x: 3, y: 0, width: 3, height: 2, data: {
        type: 'bar',
        chartOptions: {
          chart: {
            id: 'bar-example'
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
      }
    },
    { id: "3", x: 3, y: 0, width: 3, height: 2, 
        data: {
          type: "pie",
          width:"375",
          series: [44, 55, 13, 43, 22],
          chartOptions: {
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          }
        }
    },
      ],
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
            { id: "1", x: 0, y: 0, width: 3, height: 2},
            { id: "2", x: 0, y: 0, width: 3, height: 2 },
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

    };
  },
  methods: {
    moveEnd() {
      this.$nextTick(() => {
        this.$refs.dashLayout[0].placeholderY = this.maxY + this.maxH;
      });
    },
    onAddChart() {
      let id = this.dashItems.length

      let shit =  { id: id.toString(), x: 0, y: 0, width: 3, height: 2, 
        data: {
          type: "pie",
          width:"375",
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
      this.dashItems.push(shit)
  
    },
    onDeleteChart(chart) {   
      console.log(chart)
  
    }
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
