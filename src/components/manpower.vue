<template>
  <div class="manpower">
    <plat></plat>
       
      <table style="width:80%;margin:auto;">
        <tr style="text-align: center; height:40px;">
          <td>序号</td>
          <td>部门名称</td>
          <td>创建时间</td>
          <td>部门人数</td>
          <td>备注</td>
          <td>操作</td>
        </tr>
        <tr style="text-align: center; height:40px;" v-for="item in lists">
          <td>{{item.id}}</td>
          <td>{{item.dtName}}</td>
          <td>{{item.dtCreatetime}}</td>
          <td>{{item.count}}</td>
          <td>{{item.dtBz}}</td>
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
  .manpower{
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
            this.$router.push({name:'tianjia5',query:{id:item}})
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
              this.$http.post('http://192.168.100.160:8888/employee/findname',{
                "dtName":this.content,
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
              this.$http.post('http://192.168.100.160:8888/department/deleteByIdDepartment',{
                "id":id
              }).then(function(response){
                  this.all();
                  this.showAlert = false;
              }, function(response){
              })
          },
          all:function(){
               var _self = this;
              this.$http.post('http://192.168.100.160:8888/department/findAllDepartment',{
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
