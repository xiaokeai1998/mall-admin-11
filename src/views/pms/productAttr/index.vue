<template>
    <div class="shopList_grow">
       <el-card>
         <div class="shopList_dataList">
            <i class="el-icon-s-order"></i>
            <span>数据列表</span>
            <el-button
              style="float: right"
              type="primary"
              size="small">
              添加
            </el-button>
         </div>
       </el-card>
       <div class="getAddTable">
         <el-card>
            <el-table border :data="tableData" align="center" center style="width: 100%"> 
              <el-table-column prop="label"  align="center"label="编号" width="60" ></el-table-column>
              <el-table-column prop="caltName"  align="center" label="分类名称"> </el-table-column>
              <el-table-column prop="numberUnit" align="center" label="属性数量"></el-table-column>
              <el-table-column prop="sort" align="center" @click="handelCategorList()" label="参数数量"></el-table-column>
              <el-table-column align="center" width="200" label="设置">
                 <template slot-scope="scope">
                    <el-button @click="handelClickRoute()" size="mini">属性列表</el-button>
                    <el-button size="mini" >参数列表</el-button>
                </template>
              </el-table-column>
              <el-table-column align="center" width="180" label="操作">
                 <template slot-scope="scope">
                    <el-button
                    size="mini"
                   >编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                   >删除</el-button>
                </template>
              </el-table-column>
         </el-table>
         </el-card>
       </div>
       <div style="float:right">
          <el-pagination
            :current-page="currentPage4"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="15"
            layout="total, sizes, prev, pager, next, jumper"
            :total="5">
          </el-pagination>
       </div>
    </div>
</template>

<script>
export default {
 
    data(){
        return {
            navigation:true,
            value:true,
           tableData: [{
            label:1,
            caltName: '服装',
            level:'一级',
            shopNumber:100,
            numberUnit:"件",
            value:true,
            navigation:false,
            sort:1,
          }, {
            label:2,
            caltName: '手机数码',
            level:'一级',
            shopNumber:100,
            numberUnit:"件",
            value:false,
            navigation:false,
            sort:1,
          }, {
            label:3,
            caltName: '家用电器',
            level:'一级',
            shopNumber:100,
            numberUnit:"件",
            value:true,
            navigation:false,
            sort:1,
          }, {
            label:4,
            caltName: '家用电器',
            level:'一级',
            shopNumber:100,
            numberUnit:"件",
             value:false,
            navigation:false,
            sort:1,
          }],
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
        }
    },
    methods:{
    // 跳转到添加商品分类页面
    handelClickRoute () {
        this.$router.push("/pms/productAttrList");
    },
    // 跳转到商品属性列表
    handelCategorList(){
      console.log("额鹅鹅鹅")
        this.$router.push("/pms/addPorductEdit")
    }
   
}
}



</script>
<style scoped>
  .getAddTable{
      margin:20px 0;
  }
</style>