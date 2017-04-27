<template>
    <div class="choose-platform">
    	<div class="top">睿智教育</div>
    	<div class="con">
	        <div class="container-top">
	            <h1>服务推荐</h1>
	            <p>四大系统，包括大数据展示系统，备课系统，家教通系统和云教学系统。针对不同需求，我们分别服务小学、初中、高中的师生群体.</p>
	        </div>
    		<ul>
    			<li class="con-first fl">
    				<router-link :to="{path:'/schooltimetable'}">
	    				<dl>
	    					<dt>
	    						<img src="../assets/cloud/cloud_teach.png"/>
	    					</dt>
	    					<dd>
	    						<p class="p_fir">云教学</p>
		    					<p class="p_two">随时随地寓教于乐</p>
	    					</dd>
	    				</dl>
    				</router-link>
    			</li>
    			<li class="fl li-length">
    				<dl>
    					<dt>
    						<img src="../assets/cloud/home_teach.png" />
    					</dt>
    					<dd>
    						<p class="p_fir">家校通</p>
    						<p class="p_two">为学生找到优秀的老师</p>
    					</dd>
    				</dl>
    			</li>
    			<li class="fl li-length">
    				<dl>
    					<dt>
    						<img src="../assets/cloud/bigData.png" />
    					</dt>
    					<dd>
    						<p class="p_fir">大数据可视化</p>
    						<p class="p_two">根据标准化章节备课，生成专属教学路径</p>
    					</dd>
    				</dl>
    			</li>
    			<li class="fl li-length">
    				<dl>
    					<dt>
    						<img src="../assets/cloud/cloud_course.png" />
    					</dt>
    					<dd>
    						<p class="p_fir">备课</p>
    						<p class="p_two">老师更轻松</p>
    					</dd>
    				</dl>
    			</li>
    		</ul>
    	</div>
		<div class="bottom">
			<dl class="more_infor">
				<dt><img src="../assets/cloud/two_bar_codes.png"><img src="../assets/cloud/two_bar_codes.png"></dt>
				<dd>更多睿智产品资讯</dd>
			</dl>
			<div class="connect">
				<ul>
					<li class="fl">关于诲智</li>
					<li class="fl">诲智教育帮助</li>
					<li class="fl">投诉与反馈</li>
					<li class="fl">联系方式</li>
					<li class="fl">手机触屏版</li>
				</ul>
			</div>
			<p>
				Copyright © 2016-2017 睿智信息教育 版权所有 浙江睿智信息科技有限公司旗下产品 浙ICP备1103948号-1
			</p>
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
  .choose-platform{
  	position: relative;
  	margin-top:-60px;
  	.top{
  		width: 100%;
  		height: 60px;
  		padding-left: 40px;
  		font-size:20px ;
  		line-height: 60px;
  		background-color:#579bfe ;
  		color:#fff ;
  	}
  	.con{
  		width: 700px;
  		margin:0 auto;
  		height: 100%;
  		.p_fir{
  			font-size: 16px;
  			color: #000;
  			height: 44px;
  			line-height: 44px;
  		}
  		.p_two{
  			font-size: 12px;
  			color: #979798;
  			height: 12px;
  			line-height: 12px;
  		}
  		.container-top{
  			h1{
  				height:40px ;
  				width: 80px;
  				font-size: 20px;
  				margin-top: 20px;
  				color:#666666 ;
  				border-bottom:2px solid #579bfe ;
  			}
  			p{
  				height:12px ;
  				font-size: 12px;
  				padding-top: 15px;
  				color:#999999 ;
  				border-top:1px solid #dcdcdc ;
  			}
  		}
  		.con-first{
  			width: 100%;
  			text-align: center;
  			margin-top: 120px;
  			dl{
  				display: inline-block;
  			}
  		}
  		.li-length{
  			height:150px;
  			width: 233px;
  			text-align: center;
  			margin-top: 200px;
  			dl{
  				display: inline-block;
  			}
  		}

 	}
  	.bottom{
  		position: fixed;
		left: 0;
		bottom: 0;
  		width: 100%;
  		height: 41px;
  		line-height: 41px;
  		font-size: 14px;
  		text-align: center;
  		background-color: #2e2e2e;
  		color:#fff ;
  		.more_infor{
  			position: absolute;
  			right: 0;
  			bottom: 40px;
  			z-index: 999;
  			margin-right: 26px;
  			font-size:16px;
  			color:#777777;
  			img{
  				margin-left:15px ;
  			}
  			dd{
  				float: left;
  				padding-left:15px ;
  			}
  		}
	  	.connect{
	  		width: 100%;
	  		height: 45px;
	  		line-height: 45px;
	  		font-size: 14px;
	  		text-align:center;
	  		background-color: #f2f2f2;
	  		color:#8f8f8f;
	  		position: absolute;
			left: 0;
			bottom:41px ;
	  		ul{
	  			display: inline-block;
	  		}
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
        components:{

        }
    }
</script>
