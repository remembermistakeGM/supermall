<template>
  <div id="App" class="wrapper">
    <!-- <keep-alive><router-view/></keep-alive> -->
     <!-- exclude="Detail"   Detail是组件的名字-->
  <router-view  v-slot="{ Component }">
  <keep-alive exclude="Detail"> 
    <component  :is="Component" />
  </keep-alive>
</router-view> 
  <!-- <router-view></router-view> -->

    <main-tab-bar/>
  </div>
</template> 

<style>
@import './assets/css/base.css';

</style>

<script>


import MainTabBar from '@/components/content/MainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar,
     
  
  
  }
}
</script>
<style>

  
 

</style>