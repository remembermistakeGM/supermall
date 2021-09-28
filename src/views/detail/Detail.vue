<template>
  <div id="detail">
    <div class="detail-nav"> 
     <detail-nav @clickTitle="currentTitle" ref="nav" />
     </div>
     
     <scroll class="content" 
     ref="scroll" 
     :probe-type="3"
      @scroll="contentSCroll">
      <!-- {{$store.state.cartList}} -->
       <!-- <span>{{$store.state.cartList.length}}</span> -->
    <detail-swiper :swiper-img="topImages"
                   @imageLoad='imageLoad1' />
    
    <detail-base-info :goods="goods" /> 
    <detail-shop-info :shop="shop"/>
    <detail-info :detail-img-list='detailInfo' @imageLoad='imageLoad2' />
    <detail-param-info ref="params" :param='paramInfo' /> 
     <comment ref="comment" :comments='commentsInfo' />
     <goods-list ref="recommend" :goods='recommends' />
    </scroll>

    <bottom-bar :bottom-info='goods' @toCart='addToCart' />
    <div class="back-top">
    <back-top @click="goTop" />
    </div>
  </div>
</template>

<script>
  
  import Scroll from 'components/common/scroll/Scroll'

  import DetailNav from './detailChild/DetailNav'
  import DetailSwiper from './detailChild/DetailSwiper'
  import DetailBaseInfo from './detailChild/DetailBaseInfo'
  import {getdetail,Goods,Shop,GoodsParam,getReCommend} from '@/network/detail.js'
  
  import DetailShopInfo from './detailChild/DetailShopInfo'
  import DetailParamInfo from './detailChild/DetailParamInfo'
  import DetailInfo from './detailChild/DetailInfo'
  import Comment from './detailChild/Comment'
  import BackTop from '@/components/content/backTop/BackTop'
import GoodsList from '@/components/content/goods/GoodsList'
import {debounce}from '@/common/utils';
import VueEvent from '@/model/event'
import {itemListenerMixin} from '@/common/mixin';
import BottomBar from './detailChild/BottomBar'
import {mapActions} from 'vuex'

  export default {
    name:"Detail",
    components: {
        Scroll,
        DetailNav,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailInfo,
        DetailParamInfo,
        BackTop,
        Comment,
        GoodsList,
        BottomBar,
        
    },
  mixins:[
    itemListenerMixin
  ],
       data() {
          return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentsInfo:{},
        recommends:[],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0

      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid
    
        getdetail(this.iid).then(res=>{
          // console.log(res)
           const data = res.result;

         //1.获取顶部图片
          this.topImages = data.itemInfo.topImages


          // this.goods=data
            // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        ///3.获取店家信息
        this.shop=new Shop(data.shopInfo)

      //4,获取商品详情信息，
        this.detailInfo=data.detailInfo
        
          // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        
        //6.取出评论信息  
        if(data.rate.cRate !==0 ){
          // console.log(data.rate)
        this.commentsInfo=data.rate.list[0];
 }
   
          //给getThemeTopY赋值操作进行防抖
        this.getThemeTopY=debounce(()=>{
      this.themeTopYs=[];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)//把最大数加进去
      //  console.log(this.themeTopYs);
        },50)

        })
      //7.获取推荐数据
        getReCommend().then(res=>{
         this.recommends=res.data.list
        //  console.log(this.recommends);
        })
     
    },
    methods: {
      ...mapActions(['addCart']),//映射addCart函数
    // 轮播加载刷新
    imageLoad1() {
        // this.$refs.scroll.refresh()
      },
      //详情图片加载完刷新
      imageLoad2(){
        // this.$refs.scroll.refresh();
        this.newRefresh();
        this.getThemeTopY();
      },
      goTop(){
        this.$refs.scroll.scrollTo(0, 0)
      },
      currentTitle(index){
      //  console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],0)
      },
      contentSCroll(position){

        const positionY=-position.y

        //拿滚动的y值和themeTopYs对比
        let length=this.themeTopYs.length
        // console.log('1');
        for(let i=0;i<length-1 ;i++){//判断y的值与thmeTopYs的值
          if(this.currentIndex !== i &&((i<length-1 && positionY > this.themeTopYs[i] && positionY <
           this.themeTopYs[i+1]))){
         this.currentIndex=i
         this.$refs.nav.currentIndex=this.currentIndex
          }
        }
      },
      //获取购物车需要展示的信息
    addToCart(){
        const product={}
        product.image=this.topImages[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price=this.goods.realPrice;
        product.iid=this.iid;
          //将product 的数据传到store中保管
          // this.$store.commit('addCart',product)//传动mitation

          //将商品添加到购物车（1，Promise 2，mapActions）
          // 1:
          this.addCart(product).then(res =>{
            console.log(res);
          })
          // 2:
          // this.$store.dispatch("addCart",product).then(res =>{
          //   console.log(res);
          // })
          //传到actions
       
      
  // console.log(product);
    }
     
    },
  
    mounted(){
    
    },
    unmounted(){
           VueEvent.off('itemImageLoad',this.itemImgListener)
    },
      updated(){
 
    },
  }
</script>

<style scoped>

.detail-nav{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    background-color: #fff;
}
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  
  .content {
   position: absolute;
   top: 44px;
    bottom: 100px;
  
  }
  .back-top{
    bottom: 120px;
  }
  

</style>
