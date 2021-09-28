<template>
  <div @click="checkClick" :class="{'checked':isChecked}"  class="cart-list-item">
      {{cartList.checked}}
      <div class="cart-left">
           <div class="cart-goods-img">
               <!-- <img style="" :src="product.image" alt=""> -->
               <img :src="product.image" alt="">
               </div>
      </div>
      <div class="cart-right">
          <div class="cart-shop-info">
              <!-- <div class="text-1">{{product.title}}</div> -->
              <div class="info-title">{{product.title}}</div>
            <div class="info-other">
                <span>{{product.price}}</span>
                <span>{{product.count}}</span>
            </div>
          </div> 
      </div>
     
  </div>
 
  
</template>

<script>
import {mapGetters} from 'vuex'


export default {
    name:"CartListItem",
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        },

    },
    data(){
        return{
            // list:{a,b}, 
            isChecked:true
            }
        },
        computed:{
        ...mapGetters(['cartList'])//获取store里面加入购物车的商品，
        
        },
      
        methods:{
            checkClick(){
     
            this.product.checked=!this.product.checked//商品选择取反
            this.isChecked=this.product.checked
 
                console.log(this.cartList.checked);
            },
        },
      watch: {
          
   
 }
}
</script>

<style scoped>
.cart-list-item{
display: flex;
margin:0px 20px;
margin-bottom: 20px;
/* border:1px solid #999; */
border-radius: 10px;
position: relative;
padding: 5px;
}
.cart-list-item:after{
    position: absolute;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    border: 1px solid #999;
    /* background-color: #999; */
    top: 0px;
    left: 0;
    content: '';
    border-radius: 10px;

    
}
.checked::after{
    border:3px solid rgb(39, 193, 28);
}

.cart-list-item .cart-goods-img{
    width:70px;
 height: 70px;
}
.cart-list-item .cart-goods-img img{
    display: block;
    border-radius: 10px; 
    width: 100%;
    height: 100%;
}
.cart-right{
    margin-left: 5px;
}
.info-title{
    font-size: 16px;
    color: #000;
    font-weight: bold;
    line-height: 1.2rem;
  word-break:break-all;
	display:-webkit-box;
	-webkit-line-clamp:1;
	-webkit-box-orient:vertical;
	overflow:hidden;
}
.info-other{
    display: flex;
    justify-content: space-between;
    color: #666;
    font-size: 15px;
    padding: 20px 20px;
    font-weight: bold;
}

</style>