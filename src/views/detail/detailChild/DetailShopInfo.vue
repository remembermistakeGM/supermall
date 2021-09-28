<template>
  <div class="shop-info">
        <div class="shop-base-info">
            <div class="shop-logo"><img :src="shop.shoplogo" alt=""></div>
            <div class="shop-name">{{shop.name}}</div>
        </div>
        <div class="shop-sta">
            <div class="shop-sta-item">
             <span class="text1">{{shop.shopsell}}</span>
            <span class="text2">总销量</span>
             </div>
              <div class="shop-sta-item">
             <span class="text1">{{shop.shopAllGoods}}</span>
            <span class="text2">全部宝贝</span>
             </div>
        </div>
        <div class="shop-core">
            <div class="shop-core-item" v-for="(item,index) in shop.shopcore" :key='index'>
                 <span class="text1">{{item.score}}</span>
                <span class="text2">{{item.name}}</span>
               
               </div>
        </div>

        <div class="into-shop">进店逛逛</div>
        
  </div>
</template>

<script>
export default {
        name:'DetailShopInfo',
        props:{
            shop:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
    //     filters: {
    //       sellCountFilter: function (value) {
    //     if (value < 10000) return value;
    //     return (value/10000).toFixed(1) + '万'
    //   }
    // }
}
</script>

<style scoped>
.shop-base-info .shop-logo img{
    display: block;
    margin:20px auto;
    border-radius: 100px;
    width: 100px;
    height: 100px;

}
.shop-base-info .shop-name{
    margin-left: 10px;
    color: #000;
    font-size: 18px;
    text-align: center;
}
.shop-sta{
    display: flex;
    margin-top: 20px;
    padding: 10px 30px;
}
.shop-sta .shop-sta-item{
    flex: 1;
    position: relative;
}
.shop-sta .shop-sta-item:nth-child(1):after{
    content: '';
    position: absolute;
    right: 0px;
    height: 100%;
    width: 1px;
    top: 0px;
    background-color: #000;
}
.shop-sta .shop-sta-item span{
    display: block;
    text-align: center;
    line-height: 1.3rem;
}
.shop-sta .shop-sta-item .text1{
    font-size: 15px;
    color: #000;
}
.shop-sta .shop-sta-item .text2{
    font-size: 12px;
    color: #666;
}
.shop-core{
    display: flex;
    margin: 10px 0px;
}
.shop-core-item{
    flex: 1;
    margin: 0px 10px;
    box-shadow:0px 1px 2px -2px #888;
    padding: 7px 0px;
    
}
.shop-core-item span{
    display: block;
    text-align: center;
}
.shop-core-item .text1{
    color: rgb(5, 5, 5);
    font-size: 18px;
    line-height: 1.5rem;
}

.shop-core-item .text2{
    color: #888;
    font-size: 10px;
    margin-top: 4px;
}
.into-shop{
    margin: 20px auto;
    text-align: center;
    width: 30%;
    padding:0px 10px;
    border:1px solid #000;
    border-radius: 3px;
    line-height: 2.4rem;
    font-size: 19px;
}

</style>