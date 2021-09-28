import {debounce}from '@/common/utils';
import VueEvent from '@/model/event'

//两个页面使用同一代码就用混入模式mixin，相当于继承
export const itemListenerMixin={
    data(){
        return{
            itemImgListener:null,
            newRefresh:null
        }
    },
    mounted(){
         this.newRefresh = debounce(this.$refs.scroll.refresh, 50)//调用防抖动函数
        this.itemImgListener=()=>{
          this.newRefresh()
        }
          VueEvent.on('itemImageLoad',this.itemImgListener)
    }
}