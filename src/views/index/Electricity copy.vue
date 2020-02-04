<template>
  <el-container>
    <el-aside width="200px" style="height: 100%">
      <div style="float:center" class="avatar-wrapper"></div>
      <el-menu 
        default-active="/depart"
        text-color="white"
        background-color="rgb(48, 65, 86)"
        :router="true">
        <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
        <i class="el-icon-caret-bottom" />
        <el-menu-item v-for="(menu, index) in menus" :index="menu.path" :key="index">{{menu.label}}</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
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
            <el-breadcrumb-item>一级能效管理系统</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="header-right">
          <div style="float:left" >
          <i class="el-icon-user-solid"></i>
          </div>
          <el-breadcrumb-item >用户：admin</el-breadcrumb-item>
            <div style="float:left" class="size">
              <div style="float:left">
                <i class="el-icon-s-flag"></i></div>
              </div>
                <el-breadcrumb-item class="admin" >角色：超级管理</el-breadcrumb-item>
            <div style="float:left" class="avatar-wrapper">
              <el-button size="small" 	background-color="#06ca9e">修改密码</el-button>
              <el-button size="small">退出</el-button>
            </div>
        </div>  
      </el-header>
      <el-main>
        <div style="float:center " class="use" >
          <div style="border:1px solid #06ca9e" class="img">
          <span style="padding-right:25px;font-size:15px ">用电户号</span>
          <el-select style="padding-right:65px" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
          </el-select>
          <span style="padding-right:25px;font-size:15px">监测点：</span>
          <el-select style="padding-right:65px" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          <router-view></router-view>
          <div class="use2">
            <i class="el-icon-lightning"></i>
            <span class="ele">大工业用电1-10千伏</span>
            <i class="el-icon-location-outline"></i>
            <span class="ele">用电地址：广州省花都区建设北路</span>
            </div>
          </div>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="content-block content-block-max">
                <div class="pressure">
                  <span>今日变压器最大负载率</span>
                  <i class="el-icon-question"></i>
                </div>
                <div class="circular">
                  <span>95</span>
                  <span class="unit">%</span>
                </div>
                <div class="tip">请注意用电趋势</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="content-block">
                <label>当前最大需量（KW） </label>
                <div class="number">4592</div> 
                <div class="date">2018-07-13</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="content-block">
              <label>今日最大需量（KW）</label>
              <div class="number">1264</div>
                <div class="date">
                  <span>日</span>
                  <span>
                    <i class="el-icon-top"></i>
                    <span>12.45%</span>
                  </span>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="content-block">
              <label>今月最大需量（KW）</label>
              <div class="number">2691</div>
                <div class="date">
                  <span>月</span>
                  <span>
                    <i class="el-icon-bottom"></i>
                    <span>15.22%</span>
                  </span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
          <div style="border:1px solid #d5d5d5" class="chart">
          <el-col :span="6">最大需量（kw）</el-col>
           <el-col :span="18">
            <div class="" style="float:right">
              <el-button-group>
                <el-button type="primary" size="mini" icon="">年</el-button>
                <el-button type="primary" size="mini" icon="">月</el-button>
                <el-button type="primary" size="mini" icon="">日</el-button>
                <el-button type="primary" size="mini" icon="">日</el-button>
              </el-button-group>
                <el-date-picker
                  size="mini"
                  v-model="value1"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
                <el-button-group>
                  <el-button type="primary" size="mini" icon="">分钟</el-button>
                  <el-button type="primary" size="mini" icon="">小时</el-button>
                  <el-button type="primary" size="mini" icon="">天</el-button>
                </el-button-group>
              </div>
            </el-col>
            <canvas id="canvas" width=1000 height=650></canvas>
          </div>  
        </el-row>
        <div> 
          <div style="padding-top:40 px">详细数据
          <el-button style=" float:right" type="success">导出数据</el-button>
        </div>
          <el-table
            :data="tableData"
            height="string"
            fit="true"
            align="center"
            style="width: 100%; border:1px solid #d5d5d5">
            <el-table-column
              float="center"
              prop="date"
              label="时间"
              width="500">
            </el-table-column>
            <el-table-column
              prop="name"
              label="最大需量(KW)"
              width="500">
            </el-table-column>
          </el-table>
        </div> 
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="3">
          </el-pagination>
        </div>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
var canvas = document.getElementById("canvas");
			var startX = 100;
			var startY = 600;
			var ctx = canvas.getContext('2d');
			var data = [0,100,200,300,400,500];		//坐标轴坐标
			var point = [[100,200],[150,230],[200,190],[250,240],[300,300],[350,270],[400,500],[450,400],[500,100]];	//点坐标
			//建立坐标系
			function creat(){
				ctx.beginPath();
				ctx.moveTo(startX,50);
				ctx.lineTo(startX,startY);
				ctx.moveTo(startX,startY);
				ctx.lineTo(650,startY);
				ctx.closePath();
				ctx.stroke();
 
			}
			//填充横纵坐标
			function insert(){
				var x = 100;
				var y = 600;
				//绘制横坐标
				for(var i in data){
					ctx.fillText(data[i],x,y+20);
					x += 100;
				}
				x = 100;
				y = 600;
				//绘制纵坐标
				for(var j in data){
					ctx.fillText(data[j],x-20,y);
					y -= 100;
				}
			}
			//绘制折线
			var num = 0;
			var sh = setInterval(function(){
				//只有第一个点重新开始绘制
				if(num == 0)
					ctx.beginPath();
				//终止
				if(num == 8){
					clearInterval(sh);
				}
				var x = point[num][0];
				var y = point[num][1];
				//转换坐标
				x += 100;
				y = startY - y;
				ctx.arc(x,y, 2, 0, 2*Math.PI);
				//进行点的内部连接
				if(num != 0)
					ctx.lineTo(x,y);
				num++;
				ctx.moveTo(x,y);
				ctx.strokeStyle = "#3FA7DC";
				//连接边框
				ctx.stroke();
				// console.log(num);
			}, 400);
			creat();
			insert();


export default {
  // name: 'homepage',
  // components: {
  // },
  // data() {
  //     return {
  //       options: [{
  //         value: '选项1',
  //         label: '黄金糕'
  //       }, {
  //         value: '选项2',
  //         label: '双皮奶'
  //       }, {
  //         value: '选项3',
  //         label: '蚵仔煎'
  //       }, {
  //         value: '选项4',
  //         label: '龙须面'
  //       }, {
  //         value: '选项5',
  //         label: '北京烤鸭'
  //       }],
  //       value: ''
  //     }
  //   },
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
          label: '购电管理'
        },
        {
          path: '/depart',
          label: '合同管理'
        },
        {
          path: '/system',
          label: '营销管理'
        },
        {
          path: '/file',
          label: '金融管理'
        },
        {
          path: '/system',
          label: '增值服务'
        },
        {
          path: '/file',
          label: '能效管理'
        },
        {
          path: '/system',
          label: '资讯管理'
        },
        {
          path: '/file',
          label: '反馈管理'
        },
        {
          path: '/system',
          label: '系统管理'
        },
      ],
      search: '',
      tableData: [{
          date: '2016-05-02',
          name: '23189',
        }, {
          date: '2016-05-04',
          name: '12341',
        }, {
          date: '2016-05-01',
          name: '213',
        }, {
          date: '2016-05-03',
          name: '124556',
        }],
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: '',
          // methods: {
          // handleSizeChange(val) {
          //   console.log(`每页 ${val} 条`);
          // },
          // handleCurrentChange(val) {
          //   console.log(`当前页: ${val}`);
          // }
          // },
          //   currentPage4: 4
        };
  }
}

</script>

<style lang="scss" scoped>
.el-button{
	background-color: #06ca9e;
}

.breadcrumb{
  height: 20px;
  width: 100px
}
.el-breadcrumb__item {
    height:25px;
    width:130px;
    text-align: center; 
    font-size: 16px;
    font-family: 'MicrosoftYaHei';
}
.el-breadcrumb__inner{
  float:center;
  height: 12 px;
  width: 200 px;
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
    width:200px;
    /deep/ input {
      border-width: 0 0 1px 0;
      border-color: #d9d9d9;
    }
  }
  .search-icon {
    cursor: left;
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
    padding:20;
  }

  .el-main{
    width: 797px;
    height:100px;
    background-color: #634e4e;
    border: solid 1px #09cb9f;
  }
  .el-icon-s-flag  {
    color: #06ca9e;
  }
  .el-icon-user-solid{
    color: #06ca9e;
  }
  .el-breadcrumb-item{
    width:1px;
    height: 1px
  }
}

.ele{
  color: #06ca9e;
  padding-right: 45px;
}
.el-icon-lightning{
  color: #06ca9e;
  padding-right:10px;
}
.el-icon-location-outline{
   color: #06ca9e;
   padding-right:10px;
}
.use{
 padding: 50px 50px;
 .img{
   margin-block-end: 20px;
   padding: 33px 0 0 50px;
 }
}

.use2{
  padding: 35px 0px 28px 0px;
}
.content-block {
  border: 1px solid #d5d5d5;
  text-align: center;
  height: 200px;
  font-family: 'MicrosoftYaHei';
  label {
    line-height: 62px;
    height: 62px;
    font-size: 16px;
    color: #767676;
  }
  .number {
    color: #09cb9f;
    font-size: 36px;
    line-height: 88px;
    height: 88px;
  }
  .date {
    line-height: 30px;
    height: 30px;
    color: #9b9b9b;
  }
  .pressure{
    font-size: 14px;
    color: #767676;
    height: 46px;
    line-height: 46px;
    margin-top: 7px;
  }
  .circular{
    font-size: 26px;
    color: #fff;
    width: 98px;
    height: 98px;
    line-height: 98px;
    border-radius: 49px;
    background-color: #e89800;
    margin: 0 auto;
    .unit {
      font-size: 18px;
    }
  }
  .tip {
    font-size: 16px;
    color: #e89e00;
    height: 48px;
    line-height: 48px;
  }
}
.content-block-max {
  background-image: url('')
}
.el-table{
  margin-top: 30px;
}

.chart{
  height: 130px;
  line-height: 130px;
  margin: 23px 0 48px 0;
}
.block{
  height:67px;
  line-height: 67px;
  margin:37px 0 0 0;
  display: flex;
  justify-content:center;
}
</style>