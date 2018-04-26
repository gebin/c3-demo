<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <car-selector   
      v-show="isShow"  
      v-on:selected="handleSelected"
      ></car-selector>
  </div>
</template>

<script>
import Vue from 'vue'
import C3Base from "c3-base";
console.log(C3Base)
import carSelector from "c3-carselector";
Vue.use(carSelector)

import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data:function(){
    return {
      hotBrands : [], // 热门品牌
      letters:[], // 字母索引
      brandList:[], // 品牌列表
      isShowHot:true,
      isShow : true, // 是否显示车型选择器
      isShowAllBrands : true,
      isShowAllSeries : true,
      isShowAllModels : true,
      selected:{} // 选择结果
    }

  },
  methods:{
    handleSelected (selected){
        debugger
      document.write(JSON.stringify(selected))
    }
  },
  components: {
    HelloWorld,
    // CarSelector
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
