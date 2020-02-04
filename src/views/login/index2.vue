<template>

  <div class="main">
    <div class="denlu">
      <div class="">
        <h3 class="box">登录账号</h3>
      </div>
      <div>
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
       <el-input v-model="input" placeholder="账号" prefix-icon="el-icon-user-solid"></el-input>
      </div>
       <div>
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
         <el-input v-model="input" style="width:100%;margin-bottom:30px;" placeholder="密码" prefix-icon="el-icon-lock"></el-input>
       </div>
       <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
      
        <div style="position:relative">
          <div class="tips">
            <span style="margin-right:20px;">账号 : admin</span>
            <span>密码 : any</span>
          </div>
          <div class="tips">
            <span style="margin-right:20px;">账号 : editor</span>
            <span>密码 : any</span>
          </div>
          <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
            第三方登录
          </el-button>
        </div>
      </div>
    </div>
  

</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss">
body {
  background: #294666;
  font-size: 80%;
}

.main {
  background: #294666;
  height: 90%;
  width: 70%;
  margin: auto auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: auto;
}

.box {
  display: flex;
  justify-content: center;
  font-size: 26px;
  color: white;
  width: 100%;
  padding: 2px;
  // resize: both;
  overflow: auto;
}
.item {
  order:0 ;
  flex-grow:2;
}

.login-container {
  min-height: 100%;
  width: 100%;
  background-color:#1d2735;
  background-size:100% 100%;
  height:100vh;
  overflow: hidden;
};
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  };
.title-container {
    position: relative;
};
.title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
}
.svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
}
.thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 2px;
  }
.denlu {
  width: 400px;
} 
.el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  } 
</style>