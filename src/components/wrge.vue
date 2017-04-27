<template>
  <div class="wrge">
    <plat></plat>
    <form>
      <div style="height: 50px;padding-top: 20px;padding-left: 15%;"><input style="border:1px solid #e6e6e6;height:30px;padding-left:20px;width:300px;" type="text" v-model="content" placeholder="员工姓名"><button style="margin-left:10px;" @click="sous">搜索</button></div>
      <table style="width:80%;margin:auto;">
        <tr style="text-align: center; height:40px;">
          <td>员工编号</td>
          <td>员工姓名</td>
          <td>当前月份</td>
          <td>基本工资</td>
          <td>加班费</td>
          <td>工龄费</td>
          <td>考勤费</td>
          <td>矿工</td>
          <td>保险费</td>
          <td>实发工资</td>
          <td>操作</td>
        </tr>
        <tr style="text-align: center; height:40px;" v-for="item in lists">
          <td>{{item.id}}</td>
          <td>{{item.payEmname}}</td>
          <td>{{item.payMonth}}</td>
          <td>{{item.payBasemoney}}</td>
          <td>{{item.payOvertime}}</td>
          <td>{{item.payAge}}</td>
          <td>{{item.payCheck}}</td>
          <td>{{item.payAbsent}}</td>
          <td>{{item.paySafety}}</td>
          <td>{{item.payAll}}</td>
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
    </form>
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
                showAlert: false,

            }
        },
        components:{
          plat,
          alert
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
            this.$router.push({name:'zhiding6',query:{id:item}})
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
              this.$http.post('http://192.168.100.160:8888/pay/findByName',{
                "payEmname":this.content,
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
              this.$http.post('http://192.168.100.160:8888/pay/deleteByIdPay',{
                "id":id
              }).then(function(response){
                  this.all();
                  this.showAlert = false;
              }, function(response){
              })
          },
          all:function(){
               var _self = this;
              this.$http.post('http://192.168.100.160:8888/pay/findAllPay',{
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
