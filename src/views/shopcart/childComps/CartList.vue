<template>
  <div class="cart-list">
      <cart-list-item v-for="(item,index) in cartList " :key="index" :product='item' />
      <!-- <cart-list-item v-for="(item,index) in list " :key="index" /> -->
      <!-- {{list}} -->
      <!-- <div v-for="(list,index)"></div> -->
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem'

export default {
  components: { 
      CartListItem 
  },
    name:'cartList',
   computed:{
        ...mapGetters(['cartList'])//获取store里面加入购物车的商品，
    }, 
    data(){
      return{
      }
    },
    methods:{
      
    }   

}
</script>
 
<style>

</style>