<template>
  <section>
    <el-row class="header">
      <el-col :span="4"><button class="box"><div class="block">Documentation</div></button></el-col>
      <el-col :span="5"><button class="box"><div class="block">Github Repository</div></button></el-col>
      <el-col :span="5"><button class="box"><div class="block">国内文档</div></button></el-col>
      <el-col :span="5"><button class="box"><div class="block">系列文章</div></button></el-col>
      <el-col :span="5"><button class="box"><div class="block" >内推招聘</div></button></el-col>
    </el-row>
  </section>
</template>

<script>
export default {

}
</script>

<style  lang="scss"> 
.el-row{
  text-align: center; 
  
  position: relative;
  padding: 20px;
  margin: 50px;
}
.box1{
  margin-left: 20px
}
.box{
  width: 200px;
  height:60px;
  font-size: 20px;
  background: black;
  margin-bottom: 16px;
  line-height: 60px;
  margin-left: 30px;
  
  border: 0;
}
.block{

  color: white;
}
</style>