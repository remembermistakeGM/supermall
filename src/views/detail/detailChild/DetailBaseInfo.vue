<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">
   {{goods.title}}
    </div>
    <div class="price-item"> 
        <div class="n-price">{{goods.newPrice}}</div>
        <div class="o-price">{{goods.oldPrice}}</div>
        <div class="desc" >{{goods.discount}}</div>
    </div> 
    <div class="goods-columns">
        <div class="columns-item">
            <span class=text>{{goods.columns[0]}}</span>
            <span class="text">{{goods.columns[1]}}</span>
            <span class="text">{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="columns-service"> 
    <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <!-- <img :src="goods.services[index-1].icon"> -->
        <span>{{goods.services[index-1].name}}</span>
      </span>

        </div>
    </div>


  </div>
</template>

<script>
export default {
    name:'BaseInfo',
    props:{
        type:Object,
        goods:{
            defalut (){
                return []
            }
        }
    },
    data(){
        return{
            xlColumns:[]

        }
    },
    created(){
    }
    
}
</script>

<style scoped>
.base-info{
    padding-bottom: 20px !important;
}
.base-info:after{
    content: '';
    background-color:rgb(000 000 000);
    height: 1px;
    width:100%;
    position: absolute;
    left: 0;
    right: 0;
}
.base-info{
    padding: 5px 3px;
}
.info-title{
    font-size: 14px;
    color: #000;
    line-height: 1.3rem

}
.price-item{
    display: flex;
   
}
.n-price{
    font-size: 18px;
    margin: 10px 10px 0px 10px;
    align-self: flex-end;

}
.o-price{
    font-size: 10px;
    color:#666;
    margin-left: 10px;
    align-self: flex-end;
    text-decoration: line-through;
}
.desc{
    font-size: 10px;
    color:#666;
    margin-left: 10px;
    align-self: flex-end;
}
.columns-item{
    color: #111;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.columns-item .text{
    flex: 1;
}
.columns-service{
    display: flex;
    justify-content: space-between;
    margin: 8px 0px;
}
.info-service-item{
font-size: 10px;
flex: 1;
}
.goods-columns{
    margin: 3px 5px;
}
</style>