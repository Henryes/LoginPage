<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e52;
  margin-top: 60px;
}
</style>

<script type="text/javascript">
function myfun_submit(){
var user_val = document.getElementById("user").value;
var password_val = document.getElementById("password").value;
if(user_val==""){
alert("用户名不能为空！！");
}else if(password_val==""){
alert("密码不能为空！！！");
}
}
function myfun_reset(){
document.getElementById("user").value = "";
document.getElementById("password").value = "";
document.getElementById("code").value = "";
}
</script>

<body>
<div align="center">
<form action="" name="myform">
<table>
<tr>
<td>用户名：</td>
<td><input type="text" id="user" /></td>
</tr>
<tr>
<td>密  码：</td>
<td><input type="text" id="password" /></td>
</tr>
<tr>
<td>验证码：</td>
<td align="left"><input type="text" size="5" id="code" /></td>
</tr>
</table>
</form>
<table>
<tr>
<td>
<input type="submit" value="提交" onclick=myfun_submit() />
</td>
<td>
<input type="submit" value="重置" onclick=myfun_reset() />
</td>
</tr>
</table>
</div>
