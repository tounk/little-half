<template>
  <div class="add3">
    <plat></plat>
    <div>
   <form>
      <table>
        <tr>
          <td class="fir">姓名</td>
          <td class="sec"><input type="text" v-model="name"></td>
          <td class="fir">性别</td>
          <td class="sec"><input type="radio" value="男" name="sex" checked v-model="sex">男<input type="radio" value="女" name="xingbie" v-model="sex">女</td>
        </tr>
        <tr>
          <td class="fir">年龄</td>
          <td class="sec"><input type="text" v-model="age"></td>
          <td class="fir">出生日期</td>
          <td class="sec"><input type="text" v-model="born"></td>
        </tr>
        <tr>
          <td class="fir">应聘职位</td>
          <td class="sec"><input type="text" v-model="job"></td>
          <td class="fir">所学专业</td>
          <td class="sec"><input type="text" v-model="specialty"></td>
        </tr>
        <tr>
          <td class="fir">工作经验</td>
          <td class="sec"><input type="text" v-model="experience"></td>
          <td class="fir">文化程度</td>
          <td class="sec">
            <select  v-model="teachschool">
              <option value="本科生">本科生</option>
              <option value="大专生">大专生</option>
              <option value="研究生">研究生</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="fir">联系电话</td>
          <td class="sec"><input type="text"  v-model="tel"></td>
          <td class="fir">毕业学校</td>
          <td class="sec"><input type="text"  v-model="afterschool"></td>
        </tr>
        <tr>
          <td class="fir">家庭住址</td>
          <td class="sec"><input type="text" v-model="address"></td>
          <td class="fir">登记时间</td>
          <td class="sec"><input type="text"  v-model="createtime"></td>
        </tr>
        <tr>
          <td>备注信息</td>
          <td><textarea  v-model="content"></textarea></td>
          <td></td>
          <td></td>
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
  .add3{
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
                name:'',
                sex:'男',
                age:'',
                born:'',
                job:'',
                specialty:'',
                experience:'',
                teachschool:'本科生',
                tel:'',
                afterschool:'',
                address:'',
                createtime:'',
                content:'',
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
             this.$http.post('http://192.168.100.160:8888/invitejob/findByIdInvitejob', {
            "id":this.$route.query.id
             }).then(function(response){
                  console.log("------");
              this.infor = response.data.result;
              this.name = this.infor.name;
              this.sex = this.infor.sex;
              this.age = this.infor.age;
              this.born = this.infor.born;
              this.job = this.infor.job;
              this.specialty = this.infor.specialty;
              this.experience = this.infor.experience;
              this.teachschool = this.infor.teachschool;
              this.tel = this.infor.tel;
              this.afterschool = this.infor.afterschool;
              this.address = this.infor.address;
              this.createtime = this.infor.createtime;
              this.content = this.infor.content;
              }, function(response){
              });
          },
          addInviteInfo: function(){
            this.$http.post('http://192.168.100.160:8888/invitejob/addInvitejob', {
                  "name": this.name,
                  "sex": this.sex,
                  "age": this.age,
                  "born": this.born,
                  "job": this.job,
                  "specialty": this.specialty,
                  "experience": this.experience,
                  "teachschool": this.teachschool,
                  "tel": this.tel,
                  "afterschool": this.afterschool,
                  "address": this.address,
                  "createtime": this.createtime,
                  "content": this.content
              }).then(function(response){
                  console.log("SUCCESS");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
           //重置数据
          reset:function(){
                this.infor='',
                this.name='',
                this.sex='男',
                this.age='',
                this.born='',
                this.job='',
                this.specialty='',
                this.experience='',
                this.teachschool='本科生',
                this.tel='',
                this.afterschool='',
                this.address='',
                this.createtime='',
                this.content=''
          },
          updateInviteInfo: function(){
            this.$http.post('http://192.168.100.160:8888/invitejob/updateInvitejob', {
                "id":this.$route.query.id,
                  "name": this.name,
                  "sex": this.sex,
                  "age": this.age,
                  "born": this.born,
                  "job": this.job,
                  "specialty": this.specialty,
                  "experience": this.experience,
                  "teachschool": this.teachschool,
                  "tel": this.tel,
                  "afterschool": this.afterschool,
                  "address": this.address,
                  "createtime": this.createtime,
                  "content": this.content
              }).then(function(response){
                  console.log("------");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          save:function(){
            if(this.$route.query.id){
              this.updateInviteInfo();
            }else{
               var _self = this;
               console.log(this.bumenId)
               this.addInviteInfo();
            } 
          }
          
        }
    }
</script>
