<template>
    <div class="goods-list-item"  @click="itemCliock">
        
        <img :src="showImage" alt="" @load="imageLoad">
         <div class="goodstitle">{{goodsItem.title}}</div>
         <div class="goodsprice">￥{{goodsItem.price}}</div>
         </div>
    
</template>
<script>
import VueEvent from '@/model/event'

export default {
    name:'GoodsListItem',
    props:{
       goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
        
        imageLoad(){//监听图片完成
         VueEvent.emit('itemImageLoad')
        // if(this.$route.path.indexOf('/home')){//判断在首页才发送事件

        //    VueEvent.emit('itemImageLoad')//事件跨父传输，

        // }else if(this.$route.path.indexOf('/detail')){
        //    VueEvent.emit('itemImageLoad')//事件跨父传输，

        // }
        },
        itemCliock(){
            this.$router.push('/detail/'+this.goodsItem.iid)
            // console.log()
        }
    },
      computed:{
        showImage(){//组件复用后数据不同，计算是image还是show.img
                   return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    created(){
       
    }
    
  
}
</script>

<style scoped>
.goods-list-item {
    padding-bottom:20px;
} 
 .goods-list-item img{
    display: block;
    width: 100%;
    height: 170px;
}
 .goods-list-item .goodstitle{
     color: rgb(87, 73, 73);
     font-size: 13px;
     /* height: 40px; */
     line-height: 1.7;
     display: block;

word-break: break-all;
/*属性规定自动换行的处理方法。normal(使用浏览器默认的换行规则。),break-all(允许在单词内换行。),keep-all(只能在半角空格或连字符处换行。)*/
text-overflow: ellipsis;
display: -webkit-box;
/** 对象作为伸缩盒子模型显示 **/
-webkit-box-orient: vertical;
/** 设置或检索伸缩盒对象的子元素的排列方式 **/
-webkit-line-clamp: 2;
/** 显示的行数 **/
overflow: hidden;


 }
  .goods-list-item .goodsprice{
      text-align: right;
      margin: 5px;
  }
</style>