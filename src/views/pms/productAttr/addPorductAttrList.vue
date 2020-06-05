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
             <el-table-column prop="label"  align="center" width="60" >
                <el-checkbox v-model="checked"></el-checkbox>
             </el-table-column>
              <el-table-column prop="label"  align="center"label="编号" width="60" ></el-table-column>
              <el-table-column prop="typeName"  align="center" label="属性名称"> </el-table-column>
              <el-table-column prop="shopType" align="center" label="商品类型"></el-table-column>
              <el-table-column prop="values" align="center" label="可选择值列表"></el-table-column>
               <el-table-column prop="solt" align="center" label="排序"></el-table-column>
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
import axios from "axios"
export default {
    data(){
        return {
            checked:true,
            navigation:true,
            value:true,
           tableData: [{
            label:1,
            typeName: '颜色',
            shopType:'服装-T恤',
            values:"黑色、红色、白色、粉色",
            solt:100,
          },
          {
            label:2,
            typeName: '尺寸',
            shopType:'服装-T恤',
            values:"M、X、XL、2XL、3XL、4XL",
             solt:0,
          },
           ],
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
        }
    },
    created(){
      this. handeMoock()
    },
    methods:{
    // 跳转到添加商品分类页面
    handelClickRoute () {
        this.$router.push("/pms/productAttrList");
    },
    // 接口
    handeMoock(){
      axios.get("/index/list")
      .then(function(res){
        console.log(res)
      })
      .then(function(err){
        console.log(err)
      })
    }
   
}
}



</script>
<style scoped>
  .getAddTable{
      margin:20px 0;
  }
</style>