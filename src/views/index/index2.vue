<template>
  <div class="ht">
    <div class="box">
      <el-menu
        default-active="/depart"
        text-color="#fff"
        background-color="rgb(48, 65, 86)"
        :router="true">
        <el-menu-item v-for="(menu, index) in menus" :index="menu.path" :key="index">{{menu.label}}</el-menu-item>
      </el-menu>
    </div>
    <div class="">    
      <!-- <el-container> -->
        <el-header class="item" height="50px" style="border-bottom: 1px solid #ccc">
          <div class="header-left">
            <svg
              class="hamburger"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
            </svg>
            <el-breadcrumb class="breadcrumb">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="header-right">
            <div style="float:left">
              <svg-icon icon-class="search" />
                <el-input v-model="search" 
                  placeholder="Search"
                  size="mini" >
                </el-input>
            </div>
              <div style="float:left" class="infullscreen">
                <svg-icon icon-class="fullscreen" />
              </div>
              <div style="float:left" class="size">
                <svg-icon class-name="size-icon" icon-class="size" />
              </div>
              <div style="float:left" class="avatar-wrapper">
                <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
                <i class="el-icon-caret-bottom" />
              </div>
          </div>  
        </el-header>
        <el-main> 
          <router-view></router-view>
        </el-main>
      <!-- </el-container> -->
    </div>
  </div>
</template>

<script>
export default {

  name: 'homepage',
  components: {
  },

  data () {
    return {
      menus: [
        {
          path: '/homepage',
          label: '首页'
        },
        {
          path: '/user',
          label: '用户管理'
        },
        {
          path: '/depart',
          label: '部门管理'
        },
        {
          path: '/system',
          label: '系统管理'
        },
        {
          path: '/file',
          label: '文档'
        }
      ],
      search: ''
    }
  }
}
</script>

<style>
.ht{
  display: flex;
  flex-direction: row;
  justify-content: flex-start ;
  align-items:  flex-start;
  overflow: auto;
  height: 100%;
  
}
.box{
  display: flex;
  flex-direction: row;
  background-color:rgb(48, 65, 86);
  flex-wrap: wrap;
  justify-content:flex-start;
  width: 200px;
  height: 100%;
};

.item{
  display: flex;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end; 
  flex-wrap: nowrap;
  background-color: red;
  width:400px;
  height:100px;

}
.header-left {
  float: left;
  height: 100%;
  line-height: 100%;
}
.breadcrumb {
    padding-left: 15px;
    float: left;
    padding-top: 17px;
}
.hamburger {
    margin-top: 15px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    float: left;
    cursor: pointer;
  }
.header-right {
  float: right;
  height: 50px;
  line-height: 50px;
}
/* .el-header{
  width:992px;
} */
.fullscreen{
    float:right;
    padding: 0px 12px;
}
.size{
  padding: 0px 12px;
}
.user-avatar {
    padding: 5px 12px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
}
.el-input {
    width:150px;
    padding: 0px 12px;
}
.el-main{
  height: 100%;

}
.el-menu{
  width:200px;
}
</style>