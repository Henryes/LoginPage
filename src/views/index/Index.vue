<template>
  <el-container>
    <el-aside width="200px" style="height: 100%">
      <el-menu 
        default-active="/depart"
        background-color="rgb(48, 65, 86)"
        text-color="white"
        :router="true">
        <el-menu-item v-for="(menu, index) in menus" :index="menu.path" :key="index">{{menu.label}}</el-menu-item>

      </el-menu>
    </el-aside>
    <el-container>
      <!--header-->
      <el-header height="50px" style="border-bottom: 1px solid #ccc">
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
          <!-- <div style="height: 18px; width: 18px;">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><path d="M124.884 109.812L94.256 79.166c-.357-.357-.757-.629-1.129-.914a50.366 50.366 0 0 0 8.186-27.59C101.327 22.689 78.656 0 50.67 0 22.685 0 0 22.688 0 50.663c0 27.989 22.685 50.663 50.656 50.663 10.186 0 19.643-3.03 27.6-8.201.286.385.557.771.9 1.114l30.628 30.632a10.633 10.633 0 0 0 7.543 3.129c2.728 0 5.457-1.043 7.543-3.115 4.171-4.157 4.171-10.915.014-15.073M50.671 85.338C31.557 85.338 16 69.78 16 50.663c0-19.102 15.557-34.661 34.67-34.661 19.115 0 34.657 15.559 34.657 34.675 0 19.102-15.557 34.661-34.656 34.661"/></svg>
          </div> -->
          <el-input v-model="search" 
            placeholder="Search"
            size="small" ></el-input>
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
    </el-container>
  </el-container>
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
          label: '文档'
        },
        {
          path: '/depart',
          label: '引导页'
        },
        {
          path: '/system',
          label: '权限测试页'
        },
        {
          path: '/file',
          label: '图标'
        },
        {
          path: '/electricity',
          label: '组件'
        },
        {
          path: '/file',
          label: '图表'
        },
        {
          path: '/electricity',
          label: '路由嵌套'
        },
        {
          path: '/electricity',
          label: 'Table'
        },
        {
          path: '/electricity',
          label: '综合实例'
        },
        {
          path: '/electricity',
          label: 'Tab'
        },
        {
          path: '/electricity',
          label: '错误页面'
        },
        {
          path: '/electricity',
          label: '错误日志'
        },
        {
          path: '/electricity',
          label: 'Excel'
        },
        {
          path: '/electricity',
          label: 'Zip'
        },
        {
          path: '/electricity',
          label: 'PDF'
        },
        {
          path: '/electricity',
          label: '换肤'
        },
        {
          path: '/electricity',
          label: 'Clipboard'
        },
        {
          path: '/electricity',
          label: '国际化'
        },
        {
          path: '/electricity',
          label: '外链'
        },
        {
          path: '/electricity',
          label: '打赏'
        },
      ],
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb__item {
    height:50px;
    width:50px;
    text-align: center; 
}
.el-breadcrumb__inner{
  float:center;
  height: 12 px;
  width: 20 px;
  color: #606266;
  cursor: text;
}

.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}

.header-left {
  float: left;
  height: 100%;
  line-height: 100%;
  
  .hamburger {
    margin-top: 15px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    float: left;
    cursor: pointer;
    /* transform: rotate(180deg); */
  }

  .breadcrumb {
    padding-left: 15px;
    float: left;
    padding-top: 17px;
  }
}

.header-right {
  float: right;
  height: 50px;
  line-height: 50px;
  .el-input {
    width:150px;
    /deep/ input {
      border-width: 0 0 1px 0;
      border-color: #d9d9d9;
    }
  }
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .fullscreen{
    float:right;
  }
  .infullscreen{
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
.main{
  padding:0;
}

}



</style>