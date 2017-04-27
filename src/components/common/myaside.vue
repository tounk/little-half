<template>
  <div class="nav-aside">
		<ul>
			<li><img src="../../img/icloudPreclass.png"></li>
			<li><img src="../../img/icloudclass.png"></li>
			<li><img src="../../img/icloudhomeWork.png"></li>
			<li><router-link to="/schooltimetable"><img src="../../img/interactive.png"></router-link></li>
			<li><img src="../../img/icloudAnalysis.png"></li>
		</ul>
  </div>
</template>
<style lang="scss">


   .nav-aside{  			
        width:60px;
        height:100%;
        background:#2d2b38;
        ul{
            text-align: center;
            padding-top:20px;
            li{
                height:60px;
                line-height: 60px;
            }
        }        
    }    


</style>
<script>
    import Vue from 'vue'

    export default{ //进行接口暴露
        name:'myaside',
        data:function(){// data()符合es6标准
            return{

            }
        },
        methods: {//method代表方法，说明这里面的都是方法函数
          change:function(){

          }

        }
    }
</script>
