<template>
<div class="detail">
      <nav-bar class="nav-bg">
<template v-slot:left>
    <div class="back" @click="backClick"><img src="@/assets/img/common/back.svg" alt=""></div>
</template>
            <template v-slot:center>
                  <div class="detail-nav">
           <div class="" v-for="(item,index) in navTitle" :key='index'
           :class="{active:index===currentIndex}"
           @click="clickTitle(index)"
           >
          <span>{{item}}</span>
        </div>
    </div>
            </template>

            </nav-bar> 
            


    </div>
</template>

<script>
  import navBar from '@/components/common/navbar/navBar';


export default {
    name:'detailNav',
    components:{
        navBar,

    },
    
    data(){
        return{
         navTitle:[
          '商品','参数','评论','推荐'
        ],
        currentIndex:0
       
        }
    },
    methods:{
        clickTitle(index){
            this.currentIndex=index
            this.$emit('clickTitle',index)
        },
        backClick(){
            this.$router.back()
        }
    },
 
    
}
</script>
<style scoped>
#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }
  .back img{
    margin-top: 13px;
  }
.detail-nav{
    display: flex;
    justify-content: space-between;
    flex: 1;
    color: #000;
    font-size: 13px;
}
.active{
    color: #FB7299;
}
</style>