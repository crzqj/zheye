<template>
  <ColumnList :list="list" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '数据可视化',
    description: '数据可视化',
    avatar: 'https://vuejs.org/images/logo.png'
  },
  {
    id: 2,
    title: '数据可视化',
    description: '数据可视化',
    avatar: 'https://vuejs.org/images/logo.png'
  },
  {
    id: 3,
    title: '数据可视化',
    description: '数据可视化'
    // avatar: 'https://vuejs.org/images/logo.png'
  },
  {
    id: 4,
    title: '数据可视化',
    description: '数据可视化',
    avatar: 'https://vuejs.org/images/logo.png'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
