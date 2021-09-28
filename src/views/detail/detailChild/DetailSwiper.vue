<template>
     <swiper class="detail-swiper-c">
           <swiper-item v-for="(item,index) in swiperImg " :key='index'>
          <img :src="item" alt="" @load="imageLoad">
           </swiper-item>
      </swiper> 

</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'

export default {
    name:'detailSwiper',
    components: { Swiper, SwiperItem},
    props:{
        swiperImg:{
        type:Array,
        defalut(){
         return []
        }
       }
       ,
       data(){
         return{
           isLoad:false
         }
       }

    },
    methods:{
      imageLoad(){
       if(!this.isLoad){//只刷新一次
         this.$emit('imageLoad')
         this.isLoad=true
       }
      }

    }
}
</script>



<style scoped>
.detail-swiper-c {
    height: 400px;
}

  .codew-slide {
    width: 100%;
    flex-shrink: 0;
  }

  .codew-slide img {
    width: 100%;
  }
</style>