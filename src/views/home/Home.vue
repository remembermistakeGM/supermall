<template>
<div id="Home" class="home wrapper">
      <div id="nav-bar">
        <nav-bar class="nav-bg">  <template v-slot:center>  <span>MG</span></template>
            </nav-bar>
             <tab-control class="tab-current1" 
    :titles="['流行','新款','精选']"
    @tabClick='homeTabClick'
    ref="tabControl1"
    v-show="isFixed"
    
    ></tab-control> 
        </div>
        
   <scroll class="content"
            :pull-up-load="true"
            ref="scroll"
            @pullingUp='loadMore'
            :probe-type="3"
            @scroll="contentScroll"
   >
      
      <home-swiper :banners='banners'  @swiperImageLoad="swiperImageLoad"></home-swiper>
    <home-commend :recommends='recommends'></home-commend>
    <feature></feature>
    <tab-control class="tab-current2" 
    :titles="['流行','新款','精选']"
    @tabClick='homeTabClick'
    ref="tabControl2"
    
    ></tab-control>
  <goods-list :goods="showGoods"></goods-list>

   </scroll>
   
   <back-top @click.native="backTop" v-show="isShowGoTop" />


   </div>
</template>


<script>
import navBar from '@/components/common/navbar/navBar';
import TabControl from '@/components/content/tabcontrol/TabControl';
import GoodsList from '@/components/content/goods/GoodsList';
import Scroll from '@/components/common/scroll/Scroll';
import BackTop from '@/components/content/backTop/BackTop';


import HomeSwiper from "./childComps/HomeSwiper";
import HomeCommend from './childComps/HomeCommend';
import Feature from './childComps/Feature.vue';



import {getHomeMultidata, getHomeGoods} from "@/network/home.js"; 
import VueEvent from '@/model/event'
import {debounce} from '@/common/utils'
import BScroll from 'better-scroll';
import {itemListenerMixin} from '@/common/mixin';


export default {
    name:'Home',
    components:{
        navBar, 
        HomeSwiper,
        HomeCommend,
        Feature,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    minins:[
      itemListenerMixin
    ],
        data(){
        return{
            result:null,
            results:'',
            banners:[],
            recommends:[],
            goodsitems:[],
            goods:{
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []},
            },
            currentType:'pop',//默认展示
             saveY: 0,
             tabOffsetTop:0,
             isFixed:false,
             isShowGoTop:false,

        }
    },
    created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    
    },
    computed:{
        showGoods(){
        return this.goods[this.currentType].list
        }
    },
    //组件完成后调用
    mounted(){
         //监听ItemImage完成
        const newRefresh = debounce(this.$refs.scroll.refresh, 50)//调用防抖动函数
         VueEvent.on('itemImageLoad', () => {//接受GoodsListItem的事件（孙子事件），解决滑动卡顿
          newRefresh();
          })
    
    },
    methods:{ 
        /**网络请求方法 */
        getHomeMultidata(){
        getHomeMultidata().then(res =>{
            // this.result=res;
            this.banners=res.data.banner.list,
            this.recommends=res.data.recommend.list
        // console.log(res.data.banner.list,)
        });
         },
         getHomeGoods(type){
            const page = this.goods[type].page + 1
          getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
            // console.log(this.goods['pop'].list);
          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
         },
         //*事件方法 */
         homeTabClick(index){
           switch(index){
           case 0:
           this.currentType = 'pop';
           break;
           case 1:
           this.currentType = 'new';
           break;

           case 2:
           this.currentType='sell' ;     
           break;
                }
           //有两个不同tabCurrent，保证状态同步
          this.$refs.tabControl1.currentIndex = index;
          this.$refs.tabControl2.currentIndex = index;
         },
          backTop() {
 
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position){//监听页面滑动位置
        // console.log(position);
        //是否显示回到顶部
        this.isShowGoTop=(-position.y)>1000
        //是否吸顶
        this.isFixed=(-position.y)>this.tabOffsetTop
      },
        loadMore(){
            // console.log('加载更多')
             this.getHomeGoods(this.currentType)
        },
        swiperImageLoad() {//监听tabCurrent的位置
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        // console.log(this.$refs.tabControl.$el.offsetTop)
      },
    },
    activated() {
       this.$refs.scroll.scrollTo(0, this.saveY, 0);
       this.$refs.scroll.refresh()
      
      // this.$refs.scroll.scrollTo(0, this.saveY, 0)
 
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY();
      // console.log(this.saveY)
      //2.取消全局事件的监听
      VueEvent.off('itemImageLoad',this.itemImgListener)
    },
    //   destroyed(){
    //   console.log('home-destroyed');
    // }
    unmounted(){
    }
  
}

</script>
<style  scoped >

.nav-bg{
    /* background-color:  #FB7299; */
      background-color:  #3eae58;
    color: #FFF;
    
    /* position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    z-index: 9; */
}
.home{
   height: 100vh;
   position: relative;
}
#nav-bar{

}
.tab-current1{
   position: relative;
   z-index: 9;
}
.content{
      overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /* height: 788px; */
}
</style>