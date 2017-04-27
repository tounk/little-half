<template>
  <div class="xiugai">
    <plat></plat>
    <div style="margin-top:25px">
   <form>
      <table>
        <tr>
          <td class="fir">登陆名</td>
          <td class="sec"><input type="text" v-model="loginName"></td>
        </tr>
        <tr>
          <td class="fir">原密码</td>
          <td class="sec"><input type="password" v-model="oldPassword"></td>
        </tr>
        <tr>
          <td class="fir">新密码</td>
          <td class="sec"><input type="password" v-model="newPassword"></td>
        </tr>
        <tr>
          <td class="fir">再输入一次密码</td>
          <td class="sec"><input type="password" v-model="doublePassword"></td>
        </tr>
      </table>
      <div class="save1" style="height:20px;width: 100%;text-align: center;">
        <input type="button" name="" value="保存" @click="delet" class="btn-base">
      </div>
      </form>
    </div>
    <alert @positiveCb="showAlert = false" @closeAlert="showAlert = false" message="请输入两次相同的密码" :is-show="showAlert" positiveText="确定"></alert>
  </div>
</template>
<style lang="scss" scoped>
@import './scss/vars.scss';
  *{
    font-family: "Microsoft Yahei";
  }

  html{
    height: 100%;
  }
  body{
    height: 100%;
  }
  .xiugai{
    table{
      height:180px;
      width: 1000px;
      border:1px solid #e6e6e6;
      margin: 0 auto;
      margin-bottom: 20px;
      td{
        border:1px solid #e6e6e6;
      }
      tr{
        height: 20px;
        width: 1000px;
        text-align: center;
      }
      .fir{
        height: 20px;
        width: 50px;
      }
      .sec{
        height: 20px;
        width: 50px;
      }
    }
  }
</style>
<script>
  import plat from "./plat"
  import alert from "./common/alert"
    export default{
        data(){
            return{
                msg:'hello vue',
                loginName:'',
                oldPassword:'',
                newPassword:'',
                doublePassword:'',
                showAlert: false
            }
        },
        components:{
          plat,
          alert
        },
        watch:{
          loginName(){
            console.log(this.loginName);
          }
        },
        mounted(){
          this.loginName = this.$cookie.get('loginName')
          this.oldPassword = this.$cookie.get('password')
        },
        methods:{
          delet(){
            if(this.newPassword != this.doublePassword){
              this.showAlert = true;
            }else{
              this.$cookie.set('password',this.doublePassword,1);
              this.save()
            }
          },
          save:function(){
             var _self = this;
            this.$http.post('http://192.168.100.160:8888/user/updatePwd', {
                "account": this.loginName,
                "password": this.doublePassword
            }).then(function(response){
                    this.$router.push({name:'firstPage'});
            }, function(response){
            })
          }
        }
    }
</script>
