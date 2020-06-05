<template>
    <div class="app_container">
       <el-card class="box-card">
         <div>
            <i class="el-icon-search"></i>
            <span>筛选搜索</span>
            <el-button size="mini" style="float: right" type="primary">查询结果</el-button>
            <el-button size="mini" style="float: right;margin-right:10px">重置</el-button>
            <div style="margin-top:15px">
              <el-form :inline="true" size="small" label-width="140px">
                <el-form-item label="输入搜索:">
                  <el-input style="width:200px"placeholder="商品名称"></el-input>
                </el-form-item> 
                <el-form-item label="商品货号:">
                  <el-input style="width:200px" placeholder="商品货号"></el-input>
                </el-form-item>
                <el-form-item label="商品分类:">
                  <el-cascader></el-cascader>
                </el-form-item>     
              </el-form>
              <el-form :inline="true" size="small" label-width="140px">
                <el-form-item label="商品品牌:">
                  <el-cascader placeholder="请选择品牌"></el-cascader>
                </el-form-item> 
                <el-form-item label="上架状态:">
                  <el-cascader placeholder="全部"></el-cascader>
                </el-form-item>
                <el-form-item label="审核状态:">
                  <el-cascader placeholder="全部"></el-cascader>
                </el-form-item>     
              </el-form>
            </div>
         </div>    
       </el-card>

       <el-card class="add_but">
         <div>
           <i class="el-icon-s-order"></i>
           <span>数据列表</span>
           <el-button size="mini" @click="handelClickAdd()" style="float:right">添加</el-button>
         </div>
       </el-card>
        <div class="table-container">
          <el-table :data="Listdata" border style="100%">
             <el-table-column
              type="selection"
              width="55">
            </el-table-column>
             <el-table-column v-model="Listdata.id" label="编号">
                <template slot-scope="scope"></template>
              </el-table-column>
             <el-table-column label="商品图片"><template>2</template></el-table-column>
             <el-table-column v-model="Listdata.shopName" label="商品名称">
               <template>
                <p></p>
                <p></p>
               </template>
             </el-table-column>
             <el-table-column label="价格货号"><template>4</template></el-table-column>
             <el-table-column width="110" label="标题">
                <template>
                  <p style="paddin-right:10px;margin:10px 3px">上架:
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-switch>
                  </p>
                   <p style="paddin-right:10px;margin:10px 3px">推荐:
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-switch>
                  </p>
                   <p style="paddin-right:10px;margin:10px 3px">新品:
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-switch>
                  </p>
                </template>
             </el-table-column>
             <el-table-column label="排序"><template>6</template></el-table-column>
             <el-table-column label="SKU库存"><template>7</template></el-table-column>
             <el-table-column label="销量"><template>8</template></el-table-column>
             <el-table-column label="审核状态"><template>9</template></el-table-column>
             <el-table-column width="170" align="center" label="操作">
            <template  slot-scope="scope">
              <el-button style="margin:10px 0" size="mini" >查看</el-button>
              <el-button style="margin:10px 0" size="mini"  type="danger" >编辑</el-button>
              <el-button style="margin:10px 0" size="mini" >日志</el-button>
              <el-button style="margin:10px 0" size="mini" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        </div>
        <div class="hande_grow">
          <div class="batch_operate_sel">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-button style="margin:10px 0" size="mini" >确定</el-button>
        </div>
        <div class="batch_operate_contain">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
        </div>
    </div>
</template>

<script>
export default {
 
    data(){
        return {
          form:{
            region:"",
                      },
          Listdata:[{id:0, number:26,shopName:"华为HUAWEIP20",pice:3780,label:100}],
          value:true,
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4
        }
    },
     methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handelClickAdd(){
          this.$router.push({path:"/pms/addProduct"});
      }
    },
}


methods:{
   
}
</script>
<style scoped>
    .app-content_input{
    display:flex;
    }
    .app-content_input span{
        margin:10px 5px;
        
    }

    .add_but{
      margin-top:20px;
    }

    .batch_operate_contain{
      display:inline-block;
      margin-top:20px;
      float:right;
    }
    .batch_operate_sel{
      display:inline-block;
      margin-top:20px;
    }
</style>