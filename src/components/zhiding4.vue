<template>
  <div class="zhiding4">
    <plat></plat>
    <div>
      <table>
        <tr>
          <td class="fir">奖惩题目</td>
          <td class="sec"><input type="text" v-model="cjTitle"></td>
        </tr>
        <tr>
          <td class="fir">奖惩类型</td>
          <td class="sec">
            <select  v-model="cjTypeName">
              <option value="奖励">奖励</option>
              <option value="惩罚">惩罚</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="fir">奖励金额</td>
          <td class="sec"><input type="text" v-model="cjMoney"></td>
        </tr>
        <tr>
          <td class="fir">奖励时间</td>
          <td class="sec"><input type="text" v-model="cjTime"></td>
        </tr>
        <tr>
          <td>相关人员</td>
          <td><textarea  v-model="cjContent"></textarea></td>
        </tr>
      </table>
      <div class="save1" style="height:20px;width: 100%;text-align: center;">
        <input type="button" name="" value="保存" @click="save">
        <input type="reset" name="" value="重置">
        <input type="button" name="" value="返回" @click="returnback">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  *{
    font-family: "Microsoft Yahei";
  }

  html{
    height: 100%;
  }
  body{
    height: 100%;
  }
  input{
    border: 1px solid #ccc;
  }
  .zhiding4{
    table{
      height: 600px;
      width: 1000px;
      border:1px solid #e6e6e6;
      margin: 0 auto;
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
    export default{
        data(){
            return{
                msg:'hello vue',
                infor:'',
                cjTitle:'',
                cjTypeName:'奖励',
                cjMoney:'',
                cjTime:'',
                cjContent:''
            }
        },
        components:{
          plat
        },
        mounted(){
          console.log(this.$route.query.id);
          if(this.$route.query.id){
            this.findInfosById();
          }
        },
        methods:{
          returnback:function(){
            history.go(-1);
          },
         findInfosById: function(){
            var vm = this;
             this.$http.post('http://192.168.100.160:8888/Cj/findByIdCj', {
            "id":this.$route.query.id
             }).then(function(response){
              this.infor = response.data.result;
              this.cjTitle = this.infor.cjTitle;
              this.sex = this.infor.emSex;
              this.cjTypeName = this.infor.cjTypeName;
              this.cjMoney = this.infor.cjMoney;
              this.cjTime = this.infor.cjTime;
              this.cjContent = this.infor.cjContent;
              }, function(response){
              });
          },
          addCjInfo: function(){
            this.$http.post('http://192.168.100.160:8888/Cj/addCj', {
                   "cjTitle": this.cjTitle,
                  "cjTypeName": this.cjTypeName,
                  "cjMoney": this.cjMoney,
                  "cjTime": this.cjTime,
                  "cjContent": this.cjContent
              }).then(function(response){
                  console.log("SUCCESS");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          //重置数据
          reset:function(){
                this.infor=''
                this.cjTitle='',
                this.cjTypeName='奖励',
                this.cjMoney='',
                this.cjTime='',
                this.cjContent=''
          },
         updateCjInfo: function(){
            this.$http.post('http://192.168.100.160:8888/Cj/updateCj', {
                "id":this.$route.query.id,
                  "cjTitle": this.cjTitle,
                  "cjTypeName": this.cjTypeName,
                  "cjMoney": this.cjMoney,
                  "cjTime": this.cjTime,
                  "cjContent": this.cjContent
              }).then(function(response){
                  console.log("------");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
       save:function(){
            if(this.$route.query.id){
              this.updateCjInfo();
            }else{
               var _self = this;
               console.log(this.bumenId)
               this.addCjInfo();
            } 
          }
        }
    }
</script>
