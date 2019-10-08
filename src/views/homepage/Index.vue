<template>
  <section>
    <div class="todo">
      <a class="text" height="60px" style="border-bottom: 1px solid #ccc">
        <span>Supporter</span>
      </a>  
      <a class="cf-text"
        target="_blank" rel="nofollow noopener"
        style="box-shadow: none !important; color: #777777; text-decoration: none; cursor: pointer;"
        href="https://codefund.io/impressions/29a32931-a973-434e-a4fe-d7fb55b7f894/click?campaign_id=395&amp;creative_id=362&amp;property_id=111&amp;template=horizontal&amp;theme=light">
          <strong style="color: #212121;">Want to reach our audience?</strong>
          <span>Learn more about placing ethical ads on this site. </span>
      </a>
      <a href="https://codefund.io" 
        data-target="powered_by_url" 
        class="cf-powered-by" target="_blank" 
        rel="nofollow noopener" style="box-shadow: none !important; text-decoration: none; color: #909090; float: right; font-size: 12px;">
          <em>ethical ad by CodeFund</em> 
            <img src="https://codefund.io/display/29a32931-a973-434e-a4fe-d7fb55b7f894.gif">
      </a>
    </div>
    <div>
      <a href="https://github.com/PanJiaChen/vue-element-admin" target="_blank"
         class="github-corner"><svg width="80" height="80" 
         viewBox="0 0 250 250" aria-hidden="true" style="fill: rgb(64, 201, 198); color: rgb(255, 255, 255);">
         <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path> 
         <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path> 
         <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
         </svg>
      </a>
    </div>
    <div class="dashboard-editor-container">
      <el-row :gutter="40" class="panel-group">
        <el-col :span="12" class="card-panel-col">
          <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
            <div class="card-panel-icon-wrapper icon-people">
              <svg-icon icon-class="peoples" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                New Visits
              </div>
              <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
            </div>
          </div>
        </el-col>
         <el-col :span="8"  class="card-panel-col">
          <div class="card-panel" @click="handleSetLineChartData('messages')">
            <div class="card-panel-icon-wrapper icon-message">
              <svg-icon icon-class="message" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                Messages
              </div>
              <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />
            </div>
          </div>
        </el-col>
        <el-col :span="12" class="card-panel-col">
          <div class="card-panel" @click="handleSetLineChartData('purchases')">
            <div class="card-panel-icon-wrapper icon-money">
              <svg-icon icon-class="money" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                Purchases
              </div>
              <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="card-panel-col">
          <div class="card-panel" @click="handleSetLineChartData('shoppings')">
            <div class="card-panel-icon-wrapper icon-shopping">
              <svg-icon icon-class="shopping" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                Shoppings
              </div>
              <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
            </div>
          </div>
        </el-col>
      </el-row>  
      <el-row style="background:#fff;    padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData" />
      </el-row>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <raddar-chart />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <pie-chart/>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <bar-chart />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="8">
        <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
          <transaction-table />
        </el-col>
        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <todo-list />
        </el-col>
        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <box-card />
        </el-col>
      </el-row>
    </div> 
  </section>         
</template>

<script>
import CountTo from 'vue-count-to'
import RaddarChart from './RaddarChart/RaddarChart.vue'
import LineChart from '@/views/homepage/LineChart/LineChart.vue'
import TransactionTable from './TransactionTable/TransactionTable'
import PieChart from './PieChart/PieChart.vue'
import BarChart from './BarChart/BarChart.vue'
import TodoList from './TodoList/index.vue'
import BoxCard from './BoxCard/BoxCard'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  },
  components: {
    LineChart,
    CountTo,
    PieChart,
    RaddarChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard 
  },
}

</script>

<style lang="scss">
.todo{
  padding: 10px;
  background-color:  rgb(246, 248, 252);
}
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}
.github-corner{
  float:right;
}
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
    float: left;
    padding-left: 250px;
  }
  .card-panel {
    width:450px;
    height: 120px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #24f;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }  
    .icon-people {
      color: #af46c9;
    }

    .icon-message {
        color: #36a3f7;
    }

    .icon-money {
        color: #f4516c;
    }

    .icon-shopping {
        color: #34bfa3
    }

  .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
  }
  .card-panel-icon {
        float: left;
        font-size: 60px;
  }
  .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;
  }
  .card-panel-text {
        line-height: 18px;
        color: rgba(241, 23, 23, 0.466);
        font-size: 16px;
        margin-bottom: 12px;
  }
  .card-panel-num {
        font-size: 20px;
  }
  }
}
.text{
  margin-right: 4px;
  padding: 2px 6px;
  border-radius: 3px;
  background-color: #4caf50;
  color: #fff;
  content: "Supporter";
}

</style>