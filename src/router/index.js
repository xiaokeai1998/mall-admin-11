import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Layout',
      component: Layout,
      component:() => import("@/views/home/index"),
      meta:{title:'首页'}


    },
    {
      path: '/pms',
      name: 'pms',
      component: Layout,
      redirect:'/pms/product',
      meta:{title:"商品"},
      children:[
        {
          path:'product',
          name:'product',
          component:() => import("@/views/pms/product/index"),
      },
      {
        path:"addProduct",
        name:"addProduct",
        component:() => import("@/views/pms/product/add")
      },
      {
        path:"porductCate",
        name:"porductCate",
        component:() => import("@/views/pms/productCate/index")
      },
      {
        path:"addProductCate",
        name:"addProductCate",
        component:() => import("@/views/pms/productCate/add.vue")
      },
      {
        path:"prductAttr",
        name:"prductAttr",
        component:() => import("@/views/pms/productAttr/index")
      },
      {
        path:"productAttrList",
        name:"productAttrList",
        component:() => import("@/views/pms/productAttr/addPorductAttrList")
      },
      {
        path:"addPorductEdit",
        name:"addPorductEdit",
        component:() => import("@/views/pms/productAttr/addPorductEdit")
      }
    ]

    }
    
  ]
})
