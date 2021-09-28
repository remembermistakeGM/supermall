<template>
  <div class="bottom-bar">
<div class="button-list">
  <div class="price-btn"><span>{{bottomInfo.newPrice}}</span></div>
  <div class="join-btn btns"><span @click="joinCart">加入购物车</span></div>
  <div class="buy-btn btns"><span>购买</span></div>

</div>
  </div>

</template>

<script>
export default {
    name:'BottomBar' ,
    props:{
       bottomInfo:{
          type:Object,
          default(){
            return{}
          }
       }
    },
    methods:{
      joinCart(){
        this.$emit('toCart');
    
      }

    }

}
</script>

<style scoped>
.bottom-bar{
  z-index: 1;
  height: 100px;
  width: 100%;
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
	background:hsl(0deg 0% 84% / 80%)border-box;
	overflow:hidden;
	border-top-left-radius: 15px ;
border-top-right-radius: 15px ;
	box-shadow:0 0 0 1px hsla(0,0%,100%,.3) inset,0 .5em 1em rgba(0,0,0,0.6);
	text-shadow:0 1px 1px hsla(0,0%,100%,.3);

}
.bottom-bar::after{
 content: '';
 width: 100%;
 height: 100px;
 background: inherit; 
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: -1;
  filter: blur(25px); 
}

.button-list{
  display: flex;
  position: relative;
  z-index: 1
}
.bottom-bar .price-btn{
font-size: 13px;
font-weight: bold;
color: #000;
line-height: 3rem;
}
.bottom-bar div{
  flex: 1;
  justify-content: center;
  text-align: center;

}
.bottom-bar > div span{
  margin-top: 30px;
  display: block;
  text-align: center;
}

  .bottom-bar .btns span{
  display: inline-block;
  background-color: #fff;
  color: #000;
  border-radius: 3px;
  padding: 15px;
  font-weight: bold;
  
}
</style>

