<template>
  <div class="detail-info" v-if='Object.keys(detailImgList).length !== 0' >
    <div class="desc">
        {{detailImgList.desc}}
    </div>
     <div class="info-key">{{detailImgList.detailImage[0].key}}:</div>
    <div class="img-list" >
        <img v-for="(item ,index) in detailImgList.detailImage[0].list" :key="index" :src="item"  @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
import watch from 'vue'
export default {
    name:'DetailInfo',
    props:{
        detailImgList:{
            type:Object,
            default(){
                return{}
            }
        }
    },
     data(){
            return{
                counter:0,
                imagesLength:0
            }
        },
    methods:{
        imgLoad(){
            // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了.
        // if (++this.counter === this.imagesLength) {
          this.$emit('imageLoad');
        // }
        },
    },
     watch: {
	    detailImgList() {//监听props的detailImageList变化
	      // 获取图片的个数
	    	this.imagesLength = this.detailImgList.detailImage[0].list.length
	    }
    },
    updated(){
    }


}
</script>

<style scoped>
.desc{
    color: #000;
    font-size: 18px;
    margin: 5px;
    padding: 15px 5px;
    position: relative;
    line-height: 1.8rem;
}
.desc::after{
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 1px;
    width: 100%;
    content: '';
    background-color: rgb(161, 157, 157);

}
.info-key{
    margin: 30px 10px;
}
.img-list{
    width: 100%;

}
.img-list img{
    width: 100%;
    height: auto;
    display: block;
    margin-top: 1px;
}
</style>>

