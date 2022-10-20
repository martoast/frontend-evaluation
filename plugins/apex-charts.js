import Vue from 'vue'
import ApexCharts from 'apexcharts'

export default (context, inject) => {
    inject("apexcharts", ApexCharts)
}