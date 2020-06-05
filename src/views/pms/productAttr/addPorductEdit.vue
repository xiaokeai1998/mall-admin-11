<template>
    <div class="shopList_grow">
       <el-card>
         <div class="shopList_dataList">
            <i class="el-icon-s-order"></i>
            <span>数据列表</span>
            <el-button
                @click="handelShopProductAdd()"
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
               <el-table-column type="selection"width="55"></el-table-column>
              <el-table-column prop="label"  align="center"label="编号" width="60" ></el-table-column>
              <el-table-column prop="caltName"  align="center" label="属性名称"  width="100"> </el-table-column>
              <el-table-column prop="level" align="center" label="商品类型" width="100"></el-table-column>
              <el-table-column prop="shopNumber" align="center" label="属性是否可选" width="100"></el-table-column>
              <el-table-column prop="numberUnit" align="center" label="属性值的录入方式" width="120"></el-table-column>
              <el-table-column prop="value" align="center" label="可选值列表" width="200"></el-table-column>
              <el-table-column prop="sort" align="center" label="排序"></el-table-column>
              <el-table-column align="center" width="180" label="操作">
                 <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handelClickChange()"
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

       <el-dialog
        title="编辑类型"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form :rules="rules" ref="form" :model="form" label-width="100px">
          <el-form-item prop="level" label="活动名称">
            <el-input v-model="form.level"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
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
            form:{ level:''},
            
            rules:{
                level: [
            { required: true, message: '请输入类型名称', trigger: 'blur' },
        
             ],
            },
            navigation:true,
            value:true,
            dialogVisible:false,
            tableData: [
               {
            label:32,
            caltName: '适用人群',
            level:'服装-裤装',
            shopNumber:"唯一",
            numberUnit:"从列表中选取",
            value:"老年、青年、中年",
            navigation:0,
            sort:1,
          }, 
          {
            label:33,
            caltName: '风格',
            level:'服装-裤装',
            shopNumber:"唯一",
            numberUnit:"从列表中选取",
            value:"家居、运动、正装",
            navigation:0,
            sort:1,
          }, 
          {
            label:34,
            caltName: '适用场景',
            level:'服装-裤装',
            shopNumber:"唯一",
            numberUnit:"从列表中选取",
            value:"嘻哈风格、基础大众、商务正装",
            navigation:0,
            sort:1,
          },
          {
            label:35,
            caltName: '适用场景',
            level:'服装-裤装',
            shopNumber:"唯一",
            numberUnit:"从列表中选取",
            value:"2018年春、2018年夏",
            navigation:0,
            sort:1,
          },
          ],
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
        }
    },
    methods:{
    // 跳转到添加商品分类页面
    handelShopProductAdd () {
        this.$router.push("/pms/addProductCate");
    },
   handelClickEndit(){
     this.$router.push("/pms/addProductCate")
   },
   handelClickChange(){
       this.dialogVisible = true
   },
   handleClose(){
       this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      
   }
}
}



</script>
<style scoped>
  .getAddTable{
      margin:20px 0;
  }
</style>