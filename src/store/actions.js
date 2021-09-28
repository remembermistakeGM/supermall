import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types'
export default {
    addCart(context,payload){
     return new Promise((resove,reject) => {
          //将Detail传过得的product数据push到cartList
           // 使用find函数,查找是否存在此商品
           let oldProduct=context.state.cartList.find(item =>  item.iid===payload.iid)
           //判断oldProduct
           if(oldProduct){//数量加1
             context.commit(ADD_COUNTER,oldProduct)//将事件传给mutation的addCounter
             resove('数量加1')
           }else{//添加新商品
               payload.count=1;
             context.commit(ADD_TO_CART,payload)//将事件传给mutation的addToCart
            reject('添加新商品')
           }
     })
  } 
}