<template>
  <div class="hello">
     <el-container>
      <el-aside width="200px">
          <el-menu
          :router="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#ffffff"
          active-text-color="#409eff">
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-shopping-bag-2"></i>
          <span>商品</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="/pms/product">
            <template slot="title">
              <i class="el-icon-set-up"></i>
              <span>商品列表</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="/pms/porductCate">
            <template slot="title">
              <i class="el-icon-s-operation"></i>
              <span>商品分类</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="/pms/addProduct">
            <template slot="title">
              <i class="el-icon-circle-plus"></i>
              <span>添加商品</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

         <el-menu-item-group>
          <el-menu-item index="/pms/prductAttr">
            <template slot="title">
              <i class="el-icon-s-fold"></i>
              <span>商品类型</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

         <el-menu-item-group>
          <el-menu-item index="1-5">
            <template slot="title">
              <i class="el-icon-paperclip"></i>
              <span>品牌管理</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>订单</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="1-1-1">
            <template slot="title">
              <i class="el-icon-cpu"></i>
              <span>订单列表</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-2-1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>订单设置</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-3-1">
            <template slot="title">
              <i class="el-icon-c-scale-to-original"></i>
              <span>退货申请处理</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-4-1">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span>退货原因设置</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     

     <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document-remove"></i>
          <span>营销</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="1-1-2">
            <template slot="title">
              <i class="el-icon-alarm-clock"></i>
              <span>秒杀活动列表</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-2-2">
            <template slot="title">
              <i class="el-icon-s-ticket"></i>
              <span>优惠券列表</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-3-2">
            <template slot="title">
              <i class="el-icon-s-management"></i>
              <span>品牌推荐</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-4-2">
            <template slot="title">
              <i class="el-icon-s-finance"></i>
              <span>新品推荐</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

         <el-menu-item-group>
          <el-menu-item index="1-5-2">
            <template slot="title">
              <i class="el-icon-magic-stick"></i>
              <span>人气推荐</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-shopping-bag-2"></i>
          <span>权限</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="1-1-3">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>用户列表</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-2-3">
            <template slot="title">
              <i class="el-icon-s-check"></i>
              <span>角色列表</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-3-3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>菜单列表</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-menu-item index="1-4-3">
            <template slot="title">
              <i class="el-icon-s-opportunity"></i>
              <span>资源列表</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

  
    </el-menu>
      </el-aside>
      <el-container>
        <el-header>
            <breadCrumb/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
 
<script>
import breadCrumb from "@/components/breadCrumb.vue"
export default {
   components: { breadCrumb },
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods:{
    handleOpen(){},
    handleClose(){}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.el-aside{
  background:#304156;
}
@import "src/styles/mixin.scss";
.hello{
  @include clearfix;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
}
</style>
