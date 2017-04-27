<template>
  <div class="nav" style="margin-top: -60px;">
    <div class="nav-l">
    	<p style="font-size:22px;padding-left:20px">睿智教育</p>
    </div>
    <div class="nav-r">
		<span class="login-info">欢迎你，罗倩倩老师</span>
		<span class="login-img"><img src="../../img/exit.png" style="vertical-align: middle;"></span>
    </div>
  </div>
</template>
<script>
    import Vue from 'vue'
    export default{ //进行接口暴露
        name:'mynav',
        data:function(){// data()符合es6标准
            return{
              	
            }
        },
        methods: {//method代表方法，说明这里面的都是方法函数
          
          
        }
    }
</script>
<style lang="scss">
.nav{
		
        width:100%;
        height:60px;
        background:#579bfe;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color:#fff; 
        line-height: 60px;
        .nav-r{
            margin-right:30px;
            .login-img{
                padding-left: 10px;
            }
    }
}

	
</style>
