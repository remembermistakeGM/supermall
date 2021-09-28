<template>
    <div class="goods-list">
        <goods-list-item :goods-item='item' v-for="(item,index) in goods" :key="index" />
       

   </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
   components: {
       GoodsListItem 
      },
    name:'GoodsList',
    props:{
        goods:{
            type:Array,
            default(){
                return[]
            }
        }, 
      
    },
  
    
}
</script>

<style scoped>
.goods-list{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
}
.goods-list .goods-list-item {
width: 48%;
}

</style>