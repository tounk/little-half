<template>
  <div class="zhiding6">
    <plat></plat>
    <div>
   <form>
      <table>
        <tr>
          <td class="fir">编号及其姓名</td>
          <td class="sec"><input type="text" v-model="payEmname"></td>
        </tr>
        <tr>
          <td class="fir">发放时间</td>
          <td class="sec"><input type="text" v-model="payMonth"></td>
        </tr>
        <tr>
          <td class="fir">基本工资</td>
          <td class="sec"><input type="text" v-model="payBasemoney"></td>
        </tr>
        <tr>
          <td class="fir">加班次数</td>
          <td class="sec"><input type="text" v-model="payOvertime"></td>
        </tr>
        <tr>
          <td class="fir">工龄</td>
          <td class="sec"><input type="text" v-model="payAge"></td>
        </tr>
        <tr>
          <td class="fir">全勤将</td>
          <td class="sec"><input type="text"  v-model="payCheck"></td>
        </tr>
        <tr>
          <td class="fir">矿工费</td>
          <td class="sec"><input type="text"  v-model="payAbsent"></td>
        </tr>
        <tr>
          <td class="fir">保险费</td>
          <td class="sec"><input type="text"  v-model="paySafety"></td>
        </tr>
      </table>
      <div class="save1" style="height:20px;width: 100%;text-align: center;">
        <input type="button" name="" value="保存" @click="save">
        <input type="reset" name="" value="重置">
        <input type="button" name="" value="返回" @click="returnback">
      </div>
      </form>
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
  .zhiding6{
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
                payEmname:'',
                payMonth:'',
                payBasemoney:'',
                payOvertime:'',
                payAge:'',
                payCheck:'',
                payAbsent:'',
                paySafety:''
            }
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
             this.$http.post('http://192.168.100.160:8888/pay/findByIdPay', {
            "id":this.$route.query.id
             }).then(function(response){
                  this.infor = response.data.result;
                this.payEmname = this.infor.payEmname;
                this.payMonth = this.infor.payMonth;
                this.payBasemoney = this.infor.payBasemoney;
                this.payOvertime = this.infor.payOvertime;
                this.payAge = this.infor.payAge;
                this.payCheck = this.infor.payCheck;
                this.payAbsent = this.infor.payAbsent;
                this.paySafety = this.infor.paySafety;
              }, function(response){
              });
          },
          addPayInfo: function(){
            this.$http.post('http://192.168.100.160:8888/pay/addPay', {
                  "payEmname": this.payEmname,
                  "payMonth": this.payMonth,
                  "payBasemoney": this.payBasemoney,
                  "payOvertime": this.payOvertime,
                  "payAge": this.payAge,
                  "payCheck": this.payCheck,
                  "payAbsent": this.payAbsent,
                  "paySafety": this.paySafety
              }).then(function(response){
                  console.log("SUCCESS");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          //重置数据
          reset:function(){
                this.infor=''
                this.payEmname='',
                this.payMonth='',
                this.payBasemoney='',
                this.payOvertime='',
                this.payAge='',
                this.payCheck='',
                this.payAbsent='',
                this.paySafety=''
          },
          updatePayInfo: function(){
            this.$http.post('http://192.168.100.160:8888/pay/updatePay', {
                  "id":this.$route.query.id,
                  "payEmname": this.payEmname,
                  "payMonth": this.payMonth,
                  "payBasemoney": this.payBasemoney,
                  "payOvertime": this.payOvertime,
                  "payAge": this.payAge,
                  "payCheck": this.payCheck,
                  "payAbsent": this.payAbsent,
                  "paySafety": this.paySafety
              }).then(function(response){
                  console.log("------");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          save:function(){
            if(this.$route.query.id){
              this.updatePayInfo();
            }else{
               var _self = this;
               console.log(this.bumenId)
               this.addPayInfo();
            } 
          }
     }
    }
</script>
