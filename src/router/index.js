import { createRouter, createWebHistory } from 'vue-router'
  
const Home=()=>import("../views/home/Home.vue")
const Category= () => import('../views/category/Category.vue');
const Profile= () => import('../views/profile/Profile.vue');
const Shopcart=() =>import('../views/shopcart/Shopcart.vue')
const Detail=() =>import('../views/detail/Detail.vue')

const routes = [
  {
    path:'',
   redirect:'/home'
  }, 
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile,
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component:Shopcart,
  },
  {
    path: '/detail/:iid', 
    name: 'Detail',
    component:Detail,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
