import Vue from 'vue'
import BaseSvg from '@/components/BaseSvg.vue'

const components = { BaseSvg }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
