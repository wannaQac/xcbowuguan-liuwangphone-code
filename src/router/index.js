import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App";
import Cunluo from "../views/Cunluo";
import Quanjing from "../views/Quanjing";
import Chuantong from "../views/Chuantong";
import Huanjing from "../views/Huanjing";
import Lvyou from "../views/Lvyou";
import Lishi from "../views/Lishi";
import Meishi from "../views/Meishi";
import Minsu from "../views/Minsu";
import Zhaoshang from "../views/Zhaoshang";
import Q1 from "../views/Q1"
import Q2 from "../views/Q2";
import Q3 from "../views/Q3";
import Q4 from "../views/Q4";
import fa from "element-ui/src/locale/lang/fa";


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: '六汪村',
    component: Cunluo,
    show: true,
    meta:{
      title:'六汪镇',
    },
  },
  {
    path: '/Q1',
    name: '六汪镇镇区',
    component: Q1,
    subshow:true,
    show:false,
    meta:{
      title:'六汪镇镇区'
    }
  },
  {
    path: '/Q2',
    name: '石屋村',
    component: Q2,
    show:false,
    subshow:true,
    meta:{
      title:'石屋村'
    }
  },
  {
    path: '/Q3',
    name: '山周村',
    component: Q3,
    subshow:true,
    show: false,
    meta:{
      title:'山周村'
    }
  },
  {
    path: '/Q4',
    name: '柳杭沟村',
    component: Q4,
    subshow: true,
    show:false,
    meta: {
      title: '柳杭沟村'
    },
  },
  {
    path: '/Q',
    name: '全景展示',
    show: false,
    wshow:true,
    component: Quanjing,
    meta:{
      title:'全景展示'
    },
  },
  {
    path: '/Lishi',
    name: '历史口述',
    component: Lishi,
    show: true,
    meta:{
      title:'历史口述'
    },
  },
  {
    path: '/Huanjing',
    name: '环境格局',
    component: Huanjing,
    show: true,
    meta:{
      title:'环境格局'
    },
  },
  {
    path: '/Chuantong',
    name: '传统建筑',
    component: Chuantong,
    show: true,
    meta:{
      title:'传统建筑'
    },
  },
  {
    path: '/Minsu',
    name: '乡土文化',
    component: Minsu,
    show: true,
    meta:{
      title:'乡土文化'
    },
  },
  {
    path: '/Meishi',
    name: '美食物产',
    component: Meishi,
    show: true,
    meta:{
      title:'美食物产'
    },
  },
  {
    path: '/Lvyou',
    name: '旅游导览',
    component: Lvyou,
    show: true,
    meta:{
      title:'旅游导览'
    },
  },
  {
    path: '/Zhaoshang',
    name: '招商信息',
    component: Zhaoshang,
    show: true,
    meta:{
      title:'招商信息'
    },
  },
  /*{
    path: '/',
    redirect: '/Cunluo',
    show:false,
  },*/
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
