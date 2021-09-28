<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor='deepPink'>
        <template v-slot:item-icon>
        <img  src="@/assets/img/tabbar/home.svg" alt="">
      </template>
        <template v-slot:item-icon-active>
        <img  src="@/assets/img/tabbar/home_active.svg" alt="">
      </template>
    
     <template v-slot:item-text>
       <div> 
      <span>首页</span>
       </div>
  </template> 


      </tab-bar-item>
        
        <tab-bar-item path="/category" activeColor='deepPink'>
        <template v-slot:item-icon>
        <img  src="@/assets/img/tabbar/category.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img  src="@/assets/img/tabbar/category_active.svg" alt="">
      </template>
     <template v-slot:item-text>
      <span>分类</span>
  </template>

      </tab-bar-item>

      <tab-bar-item path="/shopcart" activeColor='deepPink'>
        <template v-slot:item-icon>
        <img  src="@/assets/img/tabbar/shopcart.svg" alt="">
      </template>
        <template v-slot:item-icon-active>
        <img  src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
     <template v-slot:item-text>
      <span>购物车</span>
  </template>

      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor='deepPink'> 
        <template v-slot:item-icon>
        <img  src="@/assets/img/tabbar/profile.svg" alt="">
      </template>
       <template v-slot:item-icon-active>
        <img  src="@/assets/img/tabbar/profile_active.svg" alt="">
      </template>
     <template v-slot:item-text>
      <span>我的</span>
  </template>

      </tab-bar-item>
         
    </tab-bar>
   
 
  </div>
</template> 

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'

import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem 
   
   
  }
}
</script>
<style>
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  
  }
  .tab-bar-item span{
    display: block;
  }
  


</style>