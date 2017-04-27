<template>
  <div class="addpersonInfor">
    <plat></plat>
    <div>
    <form>
      <table>
        <tr>
          <td class="fir">姓名</td>
          <td class="sec"><input type="text" v-model="xingming"></td>
          <td class="fir"></td>
          <td class="sec"></td>
        </tr>
        <tr>
          <td class="fir">年龄</td>
          <td class="sec"><input type="text" v-model="nianning"></td>
          <td class="fir">性别</td>
          <td class="sec"><input type="radio" value="男" name="xingbie" checked v-model="sex">男<input type="radio" value="女" name="xingbie" v-model="sex">女</td>
        </tr>
        <tr>
          <td class="fir">出生日期</td>
          <td class="sec"><input type="text" v-model="burnDate"></td>
          <td class="fir">身份证号</td>
          <td class="sec"><input type="text" v-model="SECId"></td>
        </tr>
        <tr>
          <td class="fir">民族</td>
          <td class="sec"><input type="text" v-model="mingzu"></td>
          <td class="fir">婚姻状况</td>
          <td class="sec"><input type="radio" value="已婚" name="hun" checked  v-model="hunying">已婚<input type="radio" value="未婚" name="hun"  v-model="hunying">未婚</td>
        </tr>
        <tr>
          <td class="fir">政治面貌</td>
          <td class="sec"><input type="radio" value="党员" name="dang" checked  v-model="dangyuan">党员<input type="radio" value="团员" name="dang" v-model="dangyuan">团员<input type="radio" value="无" name="dang" v-model="dangyuan">无</td>
          <td class="fir">籍贯</td>
          <td class="sec"><input type="text" v-model="jiguan"></td>
        </tr>
        <tr>
          <td class="fir">联系电话</td>
          <td class="sec"><input type="text"  v-model="dianhua"></td>
          <td class="fir">家庭住址</td>
          <td class="sec"><input type="text" v-model="address"></td>
        </tr>
        <tr>
          <td class="fir">毕业学校</td>
          <td class="sec"><input type="text"  v-model="school"></td>
          <td class="fir">专业</td>
          <td class="sec"><input type="text"  v-model="zhuangye"></td>
        </tr>
        <tr>
          <td class="fir">文化程度</td>
          <td class="sec">
            <select  v-model="wenhua">
              <option value="学士">学士</option>
              <option value="本科生">本科生</option>
              <option value="研究生">研究生</option>
            </select>
          </td>
          <td class="fir">上岗时间</td>
          <td class="sec"><input type="text"  v-model="shanggang"></td>
        </tr>
        <tr>
          <td class="fir">部门名称</td>
          <td class="sec">
            <select v-model="bumenId">
              <option v-for="(item,index) in bumen" :value="item.id" :label="item.dtName"></option>
            </select>
          </td>
          <td class="fir">部门工种</td>
          <td class="sec">
            <select  v-model="gongzhong">
              <option value="文档人员">文档人员</option>
              <option value="程序员">程序员</option>
              <option value="部门经理">部门经理</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>备注信息</td>
          <td><textarea  v-model="beizhu"></textarea></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <div class="save1" style="height:20px;width: 100%;text-align: center;">
        <input type="button" name="" value="保存" @click="save">
        <input type="button" @click="reset" name="" value="重置">
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
  .addpersonInfor{
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
                xingming:'',
                nianning:'',
                sex:'男',
                burnDate:'',
                SECId:'',
                mingzu:'',
                hunying:'已婚',
                dangyuan:'团员',
                jiguan:'',
                dianhua:'',
                address:'',
                school:'',
                zhuangye:'',
                wenhua:'本科生',
                shanggang:'',
                bumen:[],
                currentId: 1,
                bumenId: '',
                routeId: -1,
                gongzhong:'文档人员',
                beizhu:'',

            }
        },
        components:{
          plat
        },
        mounted(){
          this.routeId = this.$route.query.id;
          if(this.$route.query.id){
            this.findInfosById();
            this.findDepartName();
          }else{
            this.findDepartName();
          }
        },
        methods:{
          returnback:function(){
            history.go(-1);
          },
          findDepartName: function(){
            this.$http.post('http://192.168.100.160:8888/department/findDepartName', {
              }).then(function(response){
                  this.bumen = response.data.result;
                  this.bumenId = this.bumen[0].id
              }, function(response){
              }); 
          },
          //根据员工Id查询员工信息
          findInfosById: function(){
            var vm = this;
             this.$http.post('http://192.168.100.160:8888/employee/findByIdEmployee', {
            "id":this.$route.query.id
             }).then(function(response){
                  this.infor = response.data.result;
                  this.xingming = this.infor.emName;
                  this.sex = this.infor.emSex;
                  this.nianning = this.infor.emAge;
                  this.burnDate = this.infor.emBorn;
                  this.SECId = this.infor.emIdcard;
                  this.mingzu = this.infor.emNation;
                  this.hunying = this.infor.emMarriage;
                  this.dangyuan = this.infor.emVisage;
                  this.jiguan = this.infor.emAncestralhome;
                  this.dianhua = this.infor.emTel;
                  this.address = this.infor.emAddress;
                  this.school = this.infor.emAfterschool;
                  this.zhuangye = this.infor.emSpeciality;
                  this.wenhua = this.infor.emCulture;
                  this.shanggang = this.infor.emStartime;
                  this.bumenId = this.infor.emDepartmentidName;
                  this.gongzhong = this.infor.emTypework;
                  this.beizhu = this.infor.emBz;
              }, function(response){
              });
          },
          //添加员工信息
          addPersonInfo: function(){
            this.$http.post('http://192.168.100.160:8888/employee/addEmployee', {
                  "emName": this.xingming,
                  "emSex": this.sex,
                  "emAge": this.nianning,
                  "emBorn": this.burnDate,
                  "emIdcard": this.SECId,
                  "emNation": this.mingzu,
                  "emMarriage": this.hunying,
                  "emVisage": this.dangyuan,
                  "emAncestralhome": this.jiguan,
                  "emTel": this.dianhua,
                  "emAddress": this.address,
                  "emAfterschool": this.school,
                  "emSpeciality": this.zhuangye,
                  "emCulture": this.wenhua,
                  "emStartime": this.shanggang,
                  "emDepartmentidName": this.bumenId,
                  "emTypework": this.gongzhong,
                  "emBz":this.beizhu
              }).then(function(response){
                  console.log("SUCCESS");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          //重置数据
          reset: function(){
            this.infor = ''
            this.xingming = ''
            this.nianning = ''
            this.sex = '男'
            this.burnDate = ''
            this.SECId = ''
            this.mingzu = ''
            this.hunying = '已婚'
            this.dangyuan = '团员'
            this.jiguan = ''
            this.dianhua = ''
            this.address = ''
            this.school = ''
            this.zhuangye = ''
            this.wenhua = '本科生'
            this.shanggang = ''
            this.gongzhong = '文档人员'
            this.beizhu = ''
          },
          //修改员工信息
          updatePersonInfo: function(){
            this.$http.post('http://192.168.100.160:8888/employee/updateEmployee', {
                "id":this.$route.query.id,
                "emName": this.xingming,
                "emSex": this.sex,
                "emAge": this.nianning,
                "emBorn": this.burnDate,
                "emIdcard": this.SECId,
                "emNation": this.mingzu,
                "emMarriage": this.hunying,
                "emVisage": this.dangyuan,
                "emAncestralhome": this.jiguan,
                "emTel": this.dianhua,
                "emAddress": this.address,
                "emAfterschool": this.school,
                "emSpeciality": this.zhuangye,
                "emCulture": this.wenhua,
                "emStartime": this.shanggang,
                "emDepartmentid": this.bume,
                "emTypework": this.gongzhong,
                "emBz":this.beizhu
              }).then(function(response){
                  console.log("------");
                this.$router.push({name:'firstPage'});
              }, function(response){
              })
          },
          save:function(){
            if(this.$route.query.id){
              this.updatePersonInfo();
            }else{
               var _self = this;
               console.log(this.bumenId)
               this.addPersonInfo();
            } 
          }
        }
    }
</script>
