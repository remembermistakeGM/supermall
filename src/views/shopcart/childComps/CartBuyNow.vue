<template>
  <div class="buy-now-item">
      <div class="item-price buy-item">
          <i :class="{'all_checked':isSelectAll}">全部</i>
          <span>{{totalPrice}}元</span></div>
      <div class="item-button buy-item"><span>结算</span></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'CartBuyNow',
    data(){
        return{
            count:0,
        }
    },
    computed:{
          ...mapGetters(['cartList']),//获取store里面加入购物车的商品，

        totalPrice(){
            return this.$store.state.cartList.filter(item =>{//筛选器：选已经选中的商品汇总
                return item.checked
            }).reduce((preValue,item) => {//将得到的筛选值item计算，默认值为0
            return item.price*item.count
            },0).toFixed(2);
        },
        isSelectAll(){
            // return true
            console.log(this.cartList.length);
            if(this.cartList.length===0) return false
            //1.使用filter
           
            return !(this.cartList.filter(item => !item.checked).length)
           
            //2.使用find
            // return !this.cartList.find(item => !item.checked)
            //使用便利 for of
            // for( let item of this.cartList){
            //     console.log(item.checked);
            //     if(!item.checked){
            //         return false
            //     }
            // }
            // return true

        }

    },

    

}
</script>

<style scoped>
.buy-now-item{
    position: fixed;
    bottom: 49px;
    left: 0px;
    right: 0px;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: hsl(0deg 0% 84% / 80%)border-box;

}
.buy-now-item .item-price {
    display: flex;
}
.buy-now-item .item-price i{
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    margin: 0 15px;
    padding: 0 10px;
    color: #999;
}
.all_checked{
    color: #000 !important;
}
.buy-now-item .buy-item{
    flex: 1;
    align-items: center;
    align-self: center;
    text-align: center;

}
.buy-now-item .buy-item span{
    text-align: center;
  
}
.buy-now-item .item-button span{
     border:2px solid #000;
      padding: 5px 20px;
      font-weight: bold;
      border-radius: 2px;

}
</style>