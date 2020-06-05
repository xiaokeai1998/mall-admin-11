<template>
    <div class="form_container">
      <el-form :rules="rules" label-width="150px">
        <el-form-item prop="labelc" label="分类名称:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="上级分类:">
          <el-select placeholder="请选择分类"></el-select>
        </el-form-item>
         <el-form-item label="数量单位:">
          <el-input></el-input>
        </el-form-item>
         <el-form-item label="排序:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="是否显示:">
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio1" label="1">否</el-radio>
        </el-form-item>
         <el-form-item label="是否显示在导航栏:">
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio1" label="1">否</el-radio>
        </el-form-item>
         <el-form-item label="分类图标:">
            <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple    
            :limit="3"
            :file-list="fileList"
            :on-exceed="handleExceed"
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
         <el-form-item label="筛选属性:">
          <el-select placeholder="请选择"></el-select>
          <el-button mini="mini">删除</el-button>
        </el-form-item>
        <el-button class="but_grow" type="primary" mini="mini">新增</el-button>
        <el-form-item label="关键词:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item  label="分类描述:">
          <el-input type="textarea"  :rows="2"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
    name:"Detail",
    data(){
        
        return {
          radio: '1',
          radio1: '0',
          rules:{
               labelc: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          }
        }
    },
    methods:{
        handlePreview(){},
        handleRemove(){},
        beforeRemove(){},
        handleExceed(){
            
        }
   
}
}



</script>
<style scoped>
.but_grow{
    margin: 20px 100px;
}
.form_container{
    position: absolute;
    left:0;
    right:0;
    width:720px;
    padding:35px 35px 15px 35px;
    margin:20px auto;
    border:1px solid #dee1e8;
}
</style>