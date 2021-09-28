<template>
  <div class="param-info" v-if="Object.keys(param).length!=0">
<div class="table-param-box1">
<table class="table-param"  v-for="(table,index1) in param.sizes" :key='index1'>
  <tr v-for="(tr ,index2) in table" :key="index2">
  <td v-for="(td,index3) in tr" :key="index3">{{td}}</td>
  </tr>
</table>
</div>
<div class="table-param-box2">
<table class="">
  <tr v-for="(table,index) in param.infos" :key='index'>
     <td>{{table.key}}:</td>
  <td>{{table.value}}</td>
 
  </tr>


</table>
</div>
 <div class="info-img" v-if="param.image.length !== 0">
      <img :src="param.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailParamInfo',
  props:{
    param:{
      type:Object,
      default(){
        return {}
      }
    }
  }

}
</script>

<style scoped>

.param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  background-color: #fff;

  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }
   .param-info table tr {
     height: 50px;
     
   }
     .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .table-param-box2{
    border-top: 1px solid #000;
  }
</style>