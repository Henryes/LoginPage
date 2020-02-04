<template>
<el-container>
<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <div data-v-13877386="" class=""><div data-v-d16d6306="" data-v-13877386="" class="navbar"><div data-v-4e6f274c="" data-v-d16d6306="" id="hamburger-container" class="hamburger-container" style="padding: 0px 15px;"><svg data-v-4e6f274c="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64" class="hamburger is-active"><path data-v-4e6f274c="" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path></svg></div>
   <div data-v-b50ef614="" data-v-d16d6306="" aria-label="Breadcrumb" role="navigation" class="el-breadcrumb app-breadcrumb breadcrumb-container" id="breadcrumb-container">
    <span data-v-b50ef614="">
    <span data-v-b50ef614="" class="el-breadcrumb__item">
    <span role="presentation" class="el-breadcrumb__separator">/</span></span></span></div>
    <div data-v-032bd1f0="" data-v-d16d6306="" class="header-search right-menu-item" id="header-search"><svg data-v-c8a70580="" data-v-032bd1f0="" aria-hidden="true" class="svg-icon search-icon"><use data-v-c8a70580="" xlink:href="#icon-search"></use></svg> <div data-v-032bd1f0="" class="el-select header-search-select el-select--medium"><!----><div class="el-input el-input--medium el-input--suffix"><!----><input type="text" autocomplete="off" placeholder="Search" class="el-input__inner" readonly="readonly"><!----><span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-select__caret el-input__icon el-icon-"></i><!----><!----><!----><!----></span><!----></span><!----></div></div></div> 
      <div data-v-d16d6306="" class="right-menu">
          <div data-v-032bd1f0="" data-v-d16d6306="" class="header-search right-menu-item" id="header-search"><svg data-v-c8a70580="" data-v-032bd1f0="" aria-hidden="true" class="svg-icon search-icon"><use data-v-c8a70580="" xlink:href="#icon-search"></use></svg>
           <div data-v-032bd1f0="" class="el-select header-search-select el-select--medium"><!----><div class="el-input el-input--medium el-input--suffix"><!----><input type="text" readonly="readonly" autocomplete="off" placeholder="Search" class="el-input__inner"><!----><span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-select__caret el-input__icon el-icon-"></i><!----><!----><!----><!----></span><!----></span><!----></div><div class="el-select-dropdown el-popper" style="display: none;">
             <div class="el-scrollbar" style="display: none;"><div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;"><ul class="el-scrollbar__view el-select-dropdown__list"></ul></div><div class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div></div><div class="el-scrollbar__bar is-vertical">
               <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div></div></div><!----></div></div></div> <!----> <div data-v-29234bee="" data-v-d16d6306="" id="screenfull" class="right-menu-item hover-effect">
               <svg aria-hidden="true" class="svg-icon"><use data-v-c8a70580="" xlink:href="#icon-fullscreen"></use></svg></div> <div data-v-d16d6306="" class="el-tooltip right-menu-item hover-effect el-dropdown" id="size-select" aria-describedby="el-tooltip-6762" tabindex="0">
                 <div aria-haspopup="list" aria-controls="dropdown-menu-9174" role="button" tabindex="0" class=" el-dropdown-selfdefine">
                 <svg data-v-c8a70580="" aria-hidden="true" class="svg-icon size-icon"><use data-v-c8a70580="" xlink:href="#icon-size"></use></svg></div>
                <ul class="el-dropdown-menu el-popper el-dropdown-menu--medium" id="dropdown-menu-9174" style="display: none;"><li tabindex="-1" class="el-dropdown-menu__item"><!---->
      Default
    </li><li aria-disabled="true" class="el-dropdown-menu__item is-disabled"><!---->
      Medium
    </li><li tabindex="-1" class="el-dropdown-menu__item"><!---->
      Small
    </li><li tabindex="-1" class="el-dropdown-menu__item"><!---->
      Mini
    </li></ul></div> <div data-v-d16d6306="" class="avatar-container right-menu-item hover-effect el-dropdown"><div data-v-d16d6306="" class="avatar-wrapper el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-1864" role="button" tabindex="0"><img data-v-d16d6306="" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar"> <i data-v-d16d6306="" class="el-icon-caret-bottom"></i></div> <ul data-v-d16d6306="" class="el-dropdown-menu el-popper el-dropdown-menu--medium" id="dropdown-menu-1864" style="display: none;"><a data-v-d16d6306="" href="#/profile/index" class=""><li data-v-d16d6306="" tabindex="-1" class="el-dropdown-menu__item"><!---->Profile</li></a> <a data-v-d16d6306="" href="#/" class="router-link-active"><li data-v-d16d6306="" tabindex="-1" class="el-dropdown-menu__item"><!---->Dashboard</li></a> <a data-v-d16d6306="" target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/"><li data-v-d16d6306="" tabindex="-1" class="el-dropdown-menu__item"><!---->Github</li></a> <a data-v-d16d6306="" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/"><li data-v-d16d6306="" tabindex="-1" class="el-dropdown-menu__item"><!---->Docs</li></a> <li data-v-d16d6306="" tabindex="-1" class="el-dropdown-menu__item el-dropdown-menu__item--divided"><!----><span data-v-d16d6306="" style="display: block;">Log Out</span></li></ul></div></div></div> <div data-v-fac8ca64="" data-v-13877386="" id="tags-view-container" class="tags-view-container"><div data-v-be6b7bae="" data-v-fac8ca64="" class="scroll-container tags-view-wrapper el-scrollbar"><div class="el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;"><div class="el-scrollbar__view"><span data-v-fac8ca64="" class="tags-view-item">
      Dashboard
      <!----></span><span data-v-fac8ca64="" class="tags-view-item">
      Documentation
      <!----></span><span data-v-fac8ca64="" class="tags-view-item router-link-exact-active router-link-active active">
      Dynamic Table
      <span data-v-fac8ca64="" class="el-icon-close"></span></span></div></div><div class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div></div><div class="el-scrollbar__bar is-vertical"><div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div></div></div> <ul data-v-fac8ca64="" class="contextmenu" style="left: 0px; top: 0px; display: none;"><li data-v-fac8ca64="">Refresh</li> <li data-v-fac8ca64="">Close</li> <li data-v-fac8ca64="">Close Others</li> <li data-v-fac8ca64="">Close All</li></ul></div></div>
    <el-header><el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs></el-header>
    <el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
   </el-row>
   <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
  </el-table>
  </el-container>
</el-container>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, ) {
        return row.address;
      
    // column// methods: {
    //   handleOpen(key, keyPath) 
    //     console.log(key, keyPath);
    //   }
    //   handleClose(key, keyPath) 
    //     console.log(key, keyPath);
      }
    }
  }
  
</script>

<style lang="scss">
.navbar .hamburger-container[data-v-d16d6306] {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    -webkit-transition: background .3s;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;
    color: black;
}
.hamburger[data-v-4e6f274c] {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
}
.app-breadcrumb.el-breadcrumb[data-v-b50ef614] {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
}
.el-breadcrumb__item {
    float: left;
}
.navbar .right-menu[data-v-d16d6306] {
    float: right;
    height: 100%;
    line-height: 50px;
}
.navbar .right-menu .right-menu-item[data-v-d16d6306] {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    color: #5a5e66;
    vertical-align: text-bottom;
}
.svg-icon[data-v-c8a70580] {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.header-search .header-search-select[data-v-032bd1f0] {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
}
.svg-icon[data-v-c8a70580] {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.navbar .right-menu .right-menu-item.hover-effect[data-v-d16d6306] {
    cursor: pointer;
    transition: background .3s;
}
:not(svg) {
    transform-origin: 0px 0px;
}
.el-dropdown {
    display: inline-block;
    position: relative;
}
.el-dropdown-menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #e6ebf5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    max-height: 400px;
    overflow: auto;
}
.el-dropdown-menu__item {
    list-style: none;
    margin: 0;
    color: #606266;
    cursor: pointer;
    outline: none;
}
.el-dropdown-menu--medium .el-dropdown-menu__item {
    line-height: 30px;
    padding: 0 17px;
    font-size: 14px;
}
.el-dropdown-menu__item.is-disabled {
    cursor: default;
    color: #bbb;
    pointer-events: none;
}
.navbar .right-menu .avatar-container[data-v-d16d6306] {
    margin-right: 30px;
}
.navbar .right-menu .avatar-container .avatar-wrapper[data-v-d16d6306] {
    margin-top: 5px;
    position: relative;
}
html {
    line-height: 1.15;
}
.scroll-container[data-v-be6b7bae] {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
}
element.style {
    margin-bottom: -15px;
    margin-right: -15px;
}
element.style {
    left: 0px;
    top: 0px;
    display: none;
}
.scroll-container[data-v-be6b7bae] .el-scrollbar__wrap {
    height: 49px;
}
.scroll-container[data-v-be6b7bae] {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
}
.el-scrollbar__bar {
    position: absolute;
    right: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 120ms ease-out;
}
.el-scrollbar__bar.is-vertical {
    width: 6px;
    top: 2px;
}
.scroll-container[data-v-be6b7bae] .el-scrollbar__bar {
    bottom: 0px;
}
.tags-view-container .contextmenu[data-v-fac8ca64] {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3);
}
div {
    display: block;
}
*, *:before, *:after {
    box-sizing: inherit;
}
[class^="el-icon-"], [class*=" el-icon-"] {
    font-family: 'element-icons' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
body {
    height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}
</style>