import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types'
export default {
 
      //mutation的唯一目的是修改state的状态，
    //mutation中每个方法尽可能完成的事件单一一点，所以先用啊actions先监听
    //监听状态的每一步变化
    [ADD_COUNTER](state,payload){
        payload.count++
    },
    [ADD_TO_CART](state,payload){
        payload.checked=true;//添加商品时把选择的状态加进去，默认为选中true
        state.cartList.push(payload)
    }
  
}