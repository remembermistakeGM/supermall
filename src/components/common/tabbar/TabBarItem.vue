<template>
    <div class="tab-bar-item"> 
      <!-- <slot></slot> -->
      <div @click="itemClick">
      <div  v-if="!isActive">
           <slot  name="item-icon"></slot>
           </div>
           <div v-else >
           <slot  name="item-icon-active"></slot> 
           </div>
</div>
           <div :style='activeStyle'>
               <slot name="item-text"></slot>  
           </div>
</div> 

</template>
<script> 
export default {
  name:"TabBarItem",
  props:{
  path:String,
  activeColor:{
   type:String,
   defaule:"red"
 }

  },
  data(){
    return{
      // isActive:true
}
  },
  methods:{
    itemClick(){
     this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
   activeStyle() {
        return this.isActive ? {color:this.activeColor} : {}
        // return console.log(this.isActive)
      }
  }
    
}
</script>
<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item .active{
    color: brown;
  }


</style>
