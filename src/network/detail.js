import { request } from "./request";
export function getdetail(iid){

    return request({
                //根据iid得到相应商品的数据
            url: 'detail',
            params:{
                iid
            }
    })

}//推荐商品
export function getReCommend(){
  return request({
    url:'/recommend'
  })

}

export class Goods{//创建一个商品类,接受要用的数据
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    
  }
}
 export class Shop{
 constructor(ShopInfo){
   this.name=ShopInfo.name
   this.shoplogo=ShopInfo.shopLogo
   this.shopurl=ShopInfo.shopUrl
   this.shopsell=ShopInfo.cSells
   this.shopAllGoods=ShopInfo.cGoods
   this.shopcore=ShopInfo.score
 }
}
  export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

