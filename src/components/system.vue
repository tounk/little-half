<template>
  <div class="system">
    <plat></plat>
    empoyer
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
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
          plat
        }
    }
</script>
