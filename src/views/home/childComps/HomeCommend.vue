<template>
  <div id="recommeds">
      <div class="recommeds-item" v-for="(item,index) in recommends" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
</a>
      </div>
      </div>  

</template>


<script>
export default {
    name:'HomeCommend',
    props:{
        recommends:{
            type:Object,
            defalut:[],
        }
    }
}
</script>
<style scoped>
#recommeds{
    display: flex;
     width: 100%; 
     padding: 10px 0px;  
     border-bottom: 10px solid #eee;
     

}
.recommeds-item {
       flex: 1;
       margin: 0px 10px;
}
.recommeds-item a img{
width: 100%;
}
.recommeds-item a {
    display: block;
    color: #333;
    margin-top: 5px;
    font-size: 13px;
    text-align: center;
    text-decoration: none;
}

</style>