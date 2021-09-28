<template>
  <div class="comment" v-if='Object.keys(comments).length !== 0'>

    <div class="comment-more">
      <span>用户评论</span>
      <span class="more">更多</span>
    </div>
    <div class="user-info">
      <img :src="comments.user.avatar" alt="">
      <span>{{comments.user.uname}}</span>
    </div>
    <div class="comment-content">
      {{comments.content}}
    </div>
    <div class="other-info">
      <span>{{comments.created}}</span>
      <span> | </span>
      <span>{{comments.style}}</span>
    </div>
    <div class="comment-images" >
      <img v-for="(item,index) in comments.images" :key='index' :src="item" alt="">
      <!-- <img :src="item" alt=""> -->
    </div>
<!-- {{comments.list[0].created }} -->
 <!-- <span>{{comments.list[0].created | formatDate}}</span>  -->
 <!-- <span>{{ times}}</span>    -->

      <!-- {{comments.list[0].created | formatDate }} -->
   
  </div>
</template>

<script>
import {formatDate} from '@/common/utils';
export default {
    name:Comment,
    props:{
        comments:{
            type:Object,
            defalut(){
                return{}
            }
        }
    },
    data(){
      return{
        times:1111111
      }

    },
  
    created(){
      
    },
    filters:{
        showDtate(value){
            
                // 1将时间戳转换为date对象
                const date =new Date(value * 1000)
                console.log(new Date(value));
                // 2.将date格式化
                return formatDate(date,'yyyy-MM-dd hh:mm')
        }
    }
}
</script>

<style scoped>
  .comment{
    background-color: #fff;
  }
  .comment-more{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }
.comment-more .more{
  display: block;
  border-bottom: 1px solid #000;
}
.user-info{
  display: flex;
  margin: 10px;
}
.user-info img{
  width: 50px;
  height: 50px;
  border-radius: 100px;
}
.user-info span{
  margin:20px;

}
.comment-content{
  margin: 20px;
  background-color: rgb(244, 244, 244);
  border-radius: 2px;
  padding: 8px;
  min-height: 70px;
  }
  .other-info{
    display: flex;

  }
   .other-info span{
     font-size: 10px;
     color: #222;
     margin: 0px 2px;
   }
   .comment-images{
     display: flex;
     flex-flow: wrap;
     margin-top: 20px;
   }
     .comment-images img{
       width: 100px;
       height: 100px;
       display: block;
       margin-left: 5px;
       margin-top: 3px;
     }
</style>


