<template>
  <div class="tianjia5">
    <plat></plat>
    <div>
   <form>
      <table>
        <tr>
          <td class="fir">部门名称</td>
          <td class="sec"><input type="text" v-model="dtName"></td>
        </tr>
        <tr>
          <td>备注信息</td>
          <td><textarea  v-model="dtBz"></textarea></td>
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
  .tianjia5{
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
                dtName:'',
                dtCreatetime:'',
                dtBz:''
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
             this.$http.post('http://192.168.100.160:8888/department/findByIdDepartment', {
            "id":this.$route.query.id
             }).then(function(response){
                  this.infor = response.data.result;
                  this.dtName=this.infor.dtName;
                  this.dtCreatetime=this.infor.dtCreatetime;
                  this.dtBz=this.infor.dtBz
              }, function(response){
              });
          },
          //重置数据
          reset:function(){
                this.infor=''
                this.dtName='',
                this.dtCreatetime='',
                this.dtBz=''
          },
          updateDeInfo: function(){
            this.$http.post('http://192.168.100.160:8888/department/updateDepartment', {
                  "id":this.$route.query.id,
                  "dtName": this.dtName,
                  "dtCreatetime": this.dtCreatetime,
                  "dtBz": this.dtBz
              }).then(function(response){
                  console.log("------");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          addDeInfo: function(){
            this.$http.post('http://192.168.100.160:8888/department/addDepartment', {
                   "dtName": this.dtName,
                  "dtCreatetime": this.dtCreatetime,
                  "dtBz": this.dtBz
              }).then(function(response){
                  console.log("SUCCESS");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          save:function(){
            if(this.$route.query.id){
              this.updateDeInfo();
            }else{
               var _self = this;
               console.log(this.bumenId)
               this.addDeInfo();
            } 
          }

        }
    }
</script>
