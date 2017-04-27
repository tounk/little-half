<template>
  <div class="zhiding2">
    <plat></plat>
    <div class="zhiding1">
      <table>
        <tr>
          <td class="fir">培训人</td>
          <td class="sec"><input type="text" v-model="tnMan"></td>
        </tr>
        <tr>
          <td class="fir">培训主题</td>
          <td class="sec"><input type="text" v-model="tnTitle"></td>
        </tr>
        <tr>
          <td class="fir">培训宗旨</td>
          <td class="sec"><input type="text" v-model="tnContent"></td>
        </tr>
        <tr>
          <td class="fir">培训时间</td>
          <td class="sec"><input type="text" v-model="tnTime"></td>
        </tr>
        <tr>
        <td class="fir">培训地点</td>
          <td class="sec"><input type="text" v-model="tnAddress"></td>
        </tr>
        <tr>
          <td class="fir">参加人员</td>
          <td class="sec"><input type="text"  v-model="tnJoin"></td>
        </tr>
        <tr>
          <td>备注信息</td>
          <td><textarea  v-model="tnBz"></textarea></td>
        </tr>
      </table>
      <div class="save1" style="height:20px;width: 100%;text-align: center;">
        <input type="button" name="" value="保存" @click="save">
        <input type="reset" name="" @click="reset" value="重置">
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
  .zhiding2{
    .zhiding1{
      height: 600px;
      width: 1000px;
      margin:0 auto;
      text-align:center;
    }
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
                tnMan:'',
                tnTitle:'',
                tnContent:'',
                tnTime:'',
                tnAddress:'',
                tnJoin:'',
                tnBz:''
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
             this.$http.post('http://192.168.100.160:8888/train/findByIdTrain', {
            "id":this.$route.query.id
             }).then(function(response){
                  this.infor = response.data.result;
                  this.tnMan=this.infor.tnMan;
                  this.tnTitle=this.infor.tnTitle;
                  this.tnContent=this.infor.tnContent;
                  this.tnTime=this.infor.tnTime;
                  this.tnAddress=this.infor.tnAddress;
                  this.tnJoin=this.infor.tnJoin;
                  this.tnBz=this.infor.tnBz;
              }, function(response){
              });
          },
          addTrainInfo: function(){
            this.$http.post('http://192.168.100.160:8888/train/addTrain', {
                   "tnMan":this.tnMan,
                   "tnTitle":this.tnTitle,
                   "tnContent":this.tnContent,
                   "tnTime":this.tnTime,
                   "tnAddress":this.tnAddress,
                   "tnJoin":this.tnJoin,
                   "tnBz":this.tnBz
              }).then(function(response){
                  console.log("SUCCESS");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          //重置数据
          reset:function(){
                this.infor=''
                this.tnMan=''
                this.tnTitle=''
                this.tnContent=''
                this.tnTime=''
                this.tnAddress=''
                this.tnJoin=''
                this.tnBz=''
          },
          updateTrainInfo: function(){
            this.$http.post('http://192.168.100.160:8888/train/updateTrain', {
                "id":this.$route.query.id,
                   "tnMan":this.tnMan,
                   "tnTitle":this.tnTitle,
                   "tnContent":this.tnContent,
                   "tnTime":this.tnTime,
                   "tnAddress":this.tnAddress,
                   "tnJoin":this.tnJoin,
                   "tnBz":this.tnBz
              }).then(function(response){
                  console.log("------");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          save:function(){
            if(this.$route.query.id){
              this.updateTrainInfo();
            }else{
               var _self = this;
               console.log(this.bumenId)
               this.addTrainInfo();
            } 
          }
        }
    }
</script>
