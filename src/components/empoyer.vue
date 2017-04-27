<template>
  <div class="empoyer">
    <plat></plat>
       <div style="height: 50px;padding-top: 20px;padding-left: 15%;"><input style="border:1px solid #e6e6e6;height:30px;padding-left:20px;width:300px;" type="text" v-model="content" placeholder="姓名查询"><button style="margin-left:10px;" @click="sous">搜索</button></div>
      <table style="width:80%;margin:auto;">
        <tr style="text-align: center; height:40px;">
          <td>编号</td>
          <td>姓名</td>
          <td>性别</td>
          <td>部门</td>
          <td>工种</td>
          <td>学历</td>
          <td>参加工作时间</td>
          <td>操作</td>
        </tr>
        <tr style="text-align: center; height:40px;" v-for="item in lists">
          <td>{{item.id}}</td>
          <td>{{item.emName}}</td>
          <td>{{item.emSex}}</td>
          <td>{{item.emDepartmentidName}}</td>
          <td>{{item.emTypework}}</td>
          <td>{{item.emCulture}}</td>
          <td>{{item.emStartime}}</td>
          <td>
            <span @click="showId(item.id)">删除</span>
            <span @click="revise(item.id)">修改</span>
          </td>
        </tr>
      </table>
      <div style="width: 71%;margin: auto;text-align: right;margin-top: 20px">
            <span>[{{pageNum}}/{{pages}}]</span><span @click="minus">上一页</span><span @click="add">下一页</span>
        </div>
         <alert @positiveCb="delet(id)" @closeAlert="showAlert = false" message="确认删除？" :is-show="showAlert" positiveText="确定"></alert>
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
  .empoyer{
    input{
      border: 1px solid #e6e6e6;
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
                lists:[],
                content:'',
                pages:'',
                total:'',
                pageSize:10,
                pageNum:1,
                showAlert: false
            }
        },
        components:{
          plat,
          alert
          // myAlert
        },
        mounted(){
          this.all();
        },
        methods:{
          showId(item){
            this.showAlert = true;
            this.id = item
            console.log(this.id);
          },
          revise:function(item){
            this.$router.push({name:'add1',query:{id:item}})
          },
          add:function(){
             this.pageNum++
             if(this.pageNum >= this.pages){
                this.pageNum = this.pages
             }
             this.all();
          },
         minus:function(){
             this.pageNum--
             if(this.pageNum <= 1){
                this.pageNum = 1
             }
             this.all();
          },
          sous:function(){
              var _self = this;
              console.log(this.content)
              this.$http.post('http://192.168.100.160:8888/employee/findname',{
                "emName":this.content,
                'pageNum': 1,
                'pageSize': 10,
              }).then(function(response){
                  console.log("--------------");
                  this.lists = response.data.result.list;
                  console.log(response.data.result);
                  this.pages = response.data.result.pages;
              }, function(response){
              })
          },
          delet:function(id){
               var _self = this;
               id = this.id
              this.$http.post('http://192.168.100.160:8888/employee/deleteByIdEmployee',{
                "id":id
              }).then(function(response){
                  this.all();
                  this.showAlert = false
              }, function(response){
              })
          },
          all:function(){
               var _self = this;
              this.$http.post('http://192.168.100.160:8888/employee/findAllEmployee',{
                pageSize:this.pageSize,
                pageNum : this.pageNum
              }).then(function(response){
                  console.log("SUCCESS");
                  console.log(response.data.result.list);
                  this.lists = response.data.result.list;
                  this.total=response.data.result.total;
                  this.pages = Math.ceil(this.total/this.pageSize);
              }, function(response){
              })
            },
        }
    }
</script>
