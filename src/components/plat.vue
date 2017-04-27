<template>
  <div class="choose-plat">
    <ul class="top">
      <router-link to="/manpower">
        <li class="manpower">部门管理</li>
      </router-link>
      <router-link to="/empoyer">
        <li class="empoyer">员工管理</li>
      </router-link>
      <router-link to="/job">
        <li class="job">招聘管理</li>
      </router-link>
      <router-link to="/foster">
        <li class="foster">培训管理</li>
      </router-link>
      <router-link to="/insueence">
        <li class="insueence">奖惩管理</li>
      </router-link>
      <router-link to="/wrge">
        <li class="wrge">薪资管理</li>
      </router-link>
       <router-link to="/">
           <li class="right">安全退出</li>
      </router-link>
      <router-link to="/system">
        <li class="right">系统管理</li>
      </router-link>
       <router-link to="/xiugai">
        <li class="right">用户修改</li>
      </router-link>
       <router-link to="/firstPage">
        <li class="right">返回首页</li>
      </router-link>
       
    </ul>
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
  .choose-plat{
    position: relative;
    .active{
        background-color:rgba(77,85,93,.4)
      }
    .top{
      width: 100%;
      height: 60px;
      padding-left: 40px;
      font-size:16px ;
      line-height: 60px;
      background-color:#000 ;
      color:#fff;
      li{
        margin-left: -4px;
        color:#fff;
        display: inline-block;
        padding: 0 20px 0 20px;
      }
      li:hover{
        background-color:rgba(77,85,93,.4)
      }
      .right{
        margin-left: 20px;
        font-size: 14px;
        color:#71777d;
        float: right;
      }
      .right:hover{
        color: #fff;
      }
    }
    .bottom{
      width: 100%;
      height: 100px;
      font-size:20px ;
      line-height: 60px;
      background-color:#6A6A68 ;
      color:#71777d;
      li{
        float: left;
        width: 200px;
        height: 100px;
        line-height: 100px;
        margin-left: 60px;
        text-align: center;
      }
      li:hover{
        background-color:rgb(206,183,133);
      }
    }
  }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        mounted(){
          console.log(this.$route.name)
          if(this.$route.name == 'job'){
            $('.job').addClass('active')
          }else if(this.$route.name == 'manpower'){
            $('.manpower').addClass('active')
          }else if(this.$route.name == 'empoyer'){
            $('.empoyer').addClass('active')
          }else if(this.$route.name == 'foster'){
            $('.foster').addClass('active')
          }else if(this.$route.name == 'insueence'){
            $('.insueence').addClass('active')
          }else if(this.$route.name == 'wrge'){
            $('.wrge').addClass('active')
          }
        },
        components:{

        }
    }
</script>
