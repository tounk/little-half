<template>
  <div class="firstPage">
    <plat></plat>
    <div id="box" class="background">
      <ul class="wrapper">
        <li style="opacity:1;"><img src="../images/bg1.jpg"></li>
        <li><img src="../images/bg2.jpg"></li>
        <li><img src="../images/bg3.jpg"></li>
        <li><img src="../images/bg4.jpg"></li>
      </ul>
      <ol class="title" >
        <li v-for="(item,index) in menu" @click="lunbo(item,index)">{{item}}</li>
      </ol>
    </div>
    <ul class="list">
      <router-link to="/add1">
        <li><img src="../images/1.png"></li>
      </router-link>
      <router-link to="/zhiding2">
        <li><img src="../images/2.png"></li>
      </router-link>
      <router-link to="/add3">
        <li><img src="../images/3.png"></li>
      </router-link>
      <router-link to="/zhiding4">
        <li><img src="../images/4.png"></li>
      </router-link>
      <router-link to="/tianjia5">
        <li><img src="../images/5.png"></li>
      </router-link>
      <router-link to="/zhiding6">
        <li><img src="../images/6.png"></li>
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.background{
  height: 700px;
  width: 100%;
  position:relative;
  .wrapper{padding:0;}
  .wrapper li{width:100%;height:100%;opacity:0;position:absolute;}
  .title{position:absolute;bottom:60px;left: 50%;transform: translateX(-50%);}
  .title li{text-align:center;line-height:35px;float:left;font-size:20px;margin-right:5px;color:#000;width:35px;height:35px;border-radius:50px;background:#fff;opacity:0.5;}
  img{width:100%;height:700px;}
}
.list{
  width:1200px;
  margin:0 auto;
  border:1px solid #ccc;
  li{
    height:256px;
    width:597px;
    float:left;
    line-height:200px;
    text-align:center;
    color:#000;
    background:#fff;
    font-size:30px;
    &:hover{
      border:1px solid #ccc;
      background: url(../images/hover.gif) no-repeat left center;
    }
  }  
  img{
    height:49px;
  }
}       
  *{
    font-family: "Microsoft Yahei";
  }

  html{
    height: 100%;
  }
  body{
    height: 100%;
  }
  li{list-style: none;}
  a{text-decoration:none;}
  
  .firstPage{
      height:100%;
      width:100%;
      z-index:9999;  
  }
</style>
<script>
  import plat from "./plat"
    export default{
        data(){
            return{
                msg:'hello vue',
                menu:[1,2,3,4],
                index:0
            }
        },
        components:{
          plat
        },
        methods: {
          lunbo(item,idx){
            this.index = idx
            this.tab(this.index)
          },
          tab(idx){
            $('.wrapper li').eq( this.index).stop(true).animate({'opacity':1}).siblings('li').stop(true).animate({'opacity':0});  
          }
        }
    }
</script>
