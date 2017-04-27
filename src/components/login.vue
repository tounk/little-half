<template>
  <div style="height:100%;">
    <div class="content">
        <div class="top-nav">
              <div class="logo">员工管理系统</div>
          </div>
      <div class="login-box">
        <p>用户登录</p>
          <input v-model="username" placeholder="用户名" class="input-userName" type="text" autocomplete="off">
          <input v-model="password" placeholder="密码" class="input-pass" type="password" autocomplete="off" @keyup.enter="login">
          <button @click="login" class="sign-in-button">登陆</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'loginPage',
  data(){
    return{
        username:'',
        password:''
    }
   },
  methods:{
   //登陆
    login:function(){
         var _self = this;
        this.$http.post('http://192.168.100.160:8888/user/login', {
            "account": this.username,
            "password": this.password
        }).then(function(response){
            if(response.data.reason == "不存在"){
                alert("账号不存在");
            }else{
              if(response.data.reason == "密码错误"){
                  alert("密码错误");
              }else{
                this.$router.push({name:'firstPage'});
              }
            };
            this.$cookie.set('loginName',this.username,1);
            this.$cookie.set('password',this.password,1);
        }, function(response){
        }
        )},
  },
  mounted(){
  }
}
</script>

<style src="./scss/login.scss" lang='scss' scoped></style>
<template>
  <div style="height:100%;">
    <div class="content">
        <div class="top-nav">
              <div class="logo">员工管理系统</div>
          </div>
      <div class="login-box">
        <p>用户登录</p>
          <input v-model="username" placeholder="用户名" class="input-userName" type="text" autocomplete="off">
          <input v-model="password" placeholder="密码" class="input-pass" type="password" autocomplete="off" @keyup.enter="login">
          <button @click="login" class="sign-in-button">登陆</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'loginPage',
  data(){
    return{
        username:'',
        password:''
    }
   },
  methods:{
   //登陆
    login:function(){
         var _self = this;
        this.$http.post('http://192.168.100.160:8888/user/login', {
            "account": this.username,
            "password": this.password
        }).then(function(response){
            if(response.data.reason == "不存在"){
                alert("账号不存在");
            }else{
              if(response.data.reason == "密码错误"){
                  alert("密码错误");
              }else{
                this.$router.push({name:'firstPage'});
              }
            };
            this.$cookie.set('loginName',this.username,1);
            this.$cookie.set('password',this.password,1);
        }, function(response){
        }
        )},
  },
  mounted(){
  }
}
</script>

<style src="./scss/login.scss" lang='scss' scoped></style>
