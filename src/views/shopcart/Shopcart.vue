<template>
   <div class="shop-cart">
       <nav-bar class="cart-nav-bg">
           <template v-slot:center>
              <span>我的购物车<a>({{length}})</a></span>
          </template>
          </nav-bar>
          <scroll class="content" ref="scroll">
         <span>{{$store.state.cartList.length}}</span>
            <cart-list />
   </scroll>
   <cart-buy-now />
   </div>
</template>
<script>
import NavBar from '@/components/common/navbar/navBar'
import {mapGetters} from 'vuex'
import CartList from './childComps/CartList'
import Scroll from '@/components/common/scroll/Scroll'
import CartBuyNow from './childComps/CartBuyNow.vue'
export default { 
    name:'Shopcart',
    components:{
        NavBar,
        CartList,
        Scroll,
        CartBuyNow
    },
    computed:{
        ...mapGetters({
            length:'cartLength',
        })
       
        // cartLength(){
        //     return this.$store.getters.cartLength
        // }
    },
    activated(){
       this.$refs.scroll.refresh()
    }

        }
</script>

<style scoped>

.shop-cart{ 
    /* position: relative; */
    overflow: hidden;
    height: 100vh;
   
}
 .content {
   /* position: absolute;
   top: 44px;
    bottom: 49px; */
   height: calc(100% - 44px - 49px);
  }
.cart-nav-bg{
    background-color:  #3eae58;
    color: #FFF;
    position: relative;
    z-index: 1;

}
</style>