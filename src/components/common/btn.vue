<template>
  	<div class="course-button">
	  	<div class="button button-l">
	  		<router-link to="/homeworklist">
		  		<span class="btn-ico"><img src="../../img/homeworklist.png"></span>
		  		<span class="btn-title">作业列表</span>
	  		</router-link>
	  	</div>
	  	<div class="button button-r">
	  		<router-link to="/add-homeworklist">
	  		<span class="btn-ico"><img src="../../img/addhomework.png"></span>
	  		<span class="btn-title">布置作业</span></router-link>
	  	</div>
	</div>
</template>
<style scoped lang="scss">
	@import '../scss/common.scss'; 
	.course-button{
        overflow: hidden;
        height: 75px;
        font-size:15px;
        position:fixed;
        background:#fff;
        z-index:1000;
        width:100%;
        .button{line-height:30px;width:90px;height:30px;border:1px dashed #579bfc;float: left;margin:22px 0 22px 25px;
            .btn-ico img{padding-left:5px;vertical-align:middle;margin-top:-3px;}
        }
        .button:hover{
            border:1px solid $bg-color;
            color:#579bfc;
        }
    }
</style>
<script>
    import Vue from 'vue'
    export default{ //进行接口暴露
        name:'btn',
        data:function(){// data()符合es6标准
            return{
              	
            }
        },
        methods: {//method代表方法，说明这里面的都是方法函数
          
          
        }
    }
</script>
