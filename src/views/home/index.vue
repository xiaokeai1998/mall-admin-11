<template>
    <div style="margin-top:40px;margin-left:120px;margin-right:120px">
    <el-row :gutter="24">
        <el-col :span="8">
        <div class="grid-content bg-purple">
            <div class="grid-grow">后台项目</div>
            <div class="grid-grow1">mall</div>
        </div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
            <div class="grid-grow">前端项目</div>
            <div class="grid-grow1">mall-admin-web</div>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
            <div class="grid-grow">学习教程</div>
            <div class="grid-grow1">mall-learning</div>
        </div>
        </el-col>
    </el-row>


       <el-row class="dalite" :gutter="24">
        <el-col :span="8">
        <div class="grid-content1 bg-purple">
            <div class="grid-order">
                 <img src="../images/home_order.png" alt=""/>
            </div>
            <div class="grow_order_conten">
                <div class="grid-order1">今日订单总数</div>
                <div class="grid-order2">200</div>
            </div>
        </div>
        </el-col>
        <el-col :span="8"><div class="grid-content1 bg-purple">
            <div class="grid-order">
                 <img src="../images/home_today_amount.png" alt=""/>
            </div>
            <div class="grow_order_conten">
                <div class="grid-order1">今日销售总额</div>
                <div class="grid-order2">￥2000.00</div>
            </div>
        </div></el-col>
        <el-col :span="8"><div class="grid-content1 bg-purple">
          <div class="grid-order">
                 <img src="../images/home_yesterday_amount.png" alt=""/>
            </div>
            <div class="grow_order_conten">
                <div class="grid-order1">昨日销售总额</div>
                <div class="grid-order2">￥5000.00</div>
            </div>
        </div>
        </el-col>
    </el-row>

    <div class="un-handle-layout">
      <div class="layout_title">待处理事务</div>
      <div class="un-handle-content">
        <el-row style="margin:20px 20px;border-button:1px solid #DCDFE6" :gutter="21">
          <el-col :span="7">
            <div class="un-handle-item">
              <span>待付款订单</span>
              <span style="float:right;color:#ff4d0a">(10)</span>
            </div>
          </el-col>

           <el-col :span="7">
            <div class="un-handle-item">
              <span>已完成订单</span>
              <span style="float:right;color:#ff4d0a">(10)</span>
            </div>
          </el-col>

           <el-col :span="7">
            <div class="un-handle-item">
              <span>待确认收货订单</span>
              <span style="float:right;color:#ff4d0a">(10)</span>
            </div>
          </el-col>
        </el-row>

        <el-row style="margin:20px 20px;border-button:1px solid #DCDFE6" :gutter="21">
          <el-col :span="7">
            <div class="un-handle-item">
              <span>待付收货订单</span>
              <span style="float:right;color:#ff4d0a">(10)</span>
            </div>
          </el-col>

           <el-col :span="7">
            <div class="un-handle-item">
              <span>新缺货登记</span>
              <span style="float:right;color:#ff4d0a">(10)</span>
            </div>
          </el-col>

           <el-col :span="7">
            <div class="un-handle-item">
              <span>待处理退款申请</span>
              <span style="float:right;color:#ff4d0a">(10)</span>
            </div>
          </el-col>
        </el-row>

        <el-row style="margin:20px 20px;border-button:1px solid #DCDFE6" :gutter="21">
          <el-col :span="7">
            <div class="un-handle-item">
              <span>已发货订单</span>
              <span style="float:right;color:#ff4d0a">(10)</span>
            </div>
          </el-col>

           <el-col :span="7">
            <div class="un-handle-item">
              <span>待处理退货订单</span>
              <span style="float:right;color:#ff4d0a">(10)</span>
            </div>
          </el-col>

           <el-col :span="7">
            <div class="un-handle-item">
              <span>广告位即将到期</span>
              <span style="float:right;color:#ff4d0a">(10)</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="overView-layout">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="out-border">
            <div class="layout-title">商品总览</div>
            <div style="padding:40px">
               <el-row>
                <el-col class="overview-item-title" style="color:#ff2c6d;font-size:20px" :span="6">100</el-col>
                <el-col class="overview-item-title" style="color:#ff2c6d;font-size:20px" :span="6">400</el-col>
                <el-col class="overview-item-title" style="color:#ff2c6d;font-size:20px" :span="6">50</el-col>
                <el-col class="overview-item-title" style="color:#ff2c6d;font-size:20px" :span="6">500</el-col>
               </el-row class="overview-item-title">
               <el-row class="font-medium">
                <el-col class="overview-item-title" :span="6">已下架</el-col>
                <el-col class="overview-item-title" :span="6">已上架</el-col>
                <el-col class="overview-item-title" :span="6">库存紧张</el-col>
                <el-col class="overview-item-title" :span="6">全部商品</el-col>
               </el-row>
               
            </div>
          </div>
        </el-col>

         <el-col :span="12">
          <div class="out-border">
            <div class="layout-title">用户总览</div>
            <div style="padding:40px">
               <el-row>
                <el-col class="overview-item-title" style="color:#ff2c6d;font-size:20px" :span="6">100</el-col>
                <el-col class="overview-item-title" style="color:#ff2c6d;font-size:20px" :span="6">200</el-col>
                <el-col class="overview-item-title" style="color:#ff2c6d;font-size:20px" :span="6">1000</el-col>
                <el-col class="overview-item-title" style="color:#ff2c6d;font-size:20px" :span="6">5000</el-col>
               </el-row class="overview-item-title">
               <el-row class="font-medium">
                <el-col class="overview-item-title" :span="6">今日新增</el-col>
                <el-col class="overview-item-title" :span="6">昨日新增</el-col>
                <el-col class="overview-item-title" :span="6">本月新增</el-col>
                <el-col class="overview-item-title" :span="6">会员总数</el-col>
               </el-row>
               
            </div>
          </div>
        </el-col>
      </el-row>

      
    </div>

    </div>

    
</template>

<script>
export default {
 
    data(){
        return {
          
        }
    }
}


methods:{
   
}
</script>
<style scoped>
    .grid-content {
        padding-top:10px;
    }
    .overview-item-title{
        padding-top:10px;
        text-align:center;
    }
    .layout-title{
        padding:10px 10px;
        background:#f2f6fc;
    }
    .out-border{
        border: 1px solid #DCDFE6;
    }
    .overView-layout{
        margin-top:20px;
        
    }
    .grow_shop{
        margin-top:20px;
        display:flex;
    }
    .un-handle-item{
        border-bottom: 1px solid #EBEEF5;
        padding: 10px;
        color:#979693;
    }
    .un-handle-layout{
        margin-top:20px;
        border: 1px solid #DCDFE6;
        
    }
    .layout_title{
        height:40px;
        background:#f2f6fc;
        line-height:40px;
        font-weight:600;
        color:#7a7d81;
        padding:0 10px;
    }
    .grid-content{
        border:1px solid #e6e9ed;
        width:100%;
        height:80px;
    }
    .grid-grow{
        background:#f2f6fc;
        font-weight:600;
        padding:5px 10px;
    }
    .grid-grow1{
        padding:10px 10px;
        color:#409eff;
        font-size:16px;
    }
    .dalite{
        margin-top:20px;
        
    }
    .grid-content1{
        width:100%;
        display:flex;
        border:1px solid #e6e9ed;
        width:100%;
        height:100px;
        padding:20px 10px;
    }
   .grid-order img{
        width:50px;
        height:50px;
    }
    .grow_order_conten{
        padding:5px 10px;

        }
</style>