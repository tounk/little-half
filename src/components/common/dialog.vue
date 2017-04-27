<template>
  <transition name="dialog-fade">
    <div class="wrapper" v-if="isShow" @click.self="handleWrapperClick">
      <div class="dialog" :class="[sizeClass]" >
					<div class="dialog-t">
						<slot name="dialog-title"></slot>
						<img class="close-btn" src="../../img/close.png" @click="close"/>
					</div>
					<div class="dialog-b">
						<div class="body">
		          <slot></slot>
		        </div>
					</div>       
			</div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'my-dialog',
    props: {
      title: {
        type: String,
        default: ''
      },
      modal: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        type: Boolean,
        default: true
      },
      closeOnPressEscape: {
        type: Boolean,
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: 'small'
      },
      customClass: {
        type: String,
        default: ''
      },
      top: {
        type: String,
        default: '15%'
      },
      isShow:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        visible: this.isShow
      };
    },
    computed: {
      sizeClass() {
        return `${ this.size }`;
   	}
      
//    ,style() {
//      return this.size === 'full' ? {} : { 'margin-bottom': '50px', 'top': this.top };
//    }
    },
    methods: {
      handleWrapperClick() {
        this.close();
      },
      close(){
        this.$emit('closeDialog');
      },
      open(){
        this.$emit('openDialog');
      }
    }
  };
</script>

<style lang="scss">
.wrapper{
    position: fixed;
    overflow: auto;
    margin: 0;
    left:0;
    right:0;
    bottom:0;
    top:0;
    z-index: 99999999999999;
    background-color: rgba(0, 0, 0, 0.75);
  }
	.close-btn{
	    cursor: pointer;
	    position: absolute;
	    right: 20px;
	    top: 23px;
	    /*width: 8px;*/
	    /*height: 15px;*/
	  }
	.dialog{
		width:902px;
		height:502px;
		background:#fff;
		position: absolute;
		top:25%;
		left:50%;
		transform: translateX(-50%);
		z-index: 2001;
		.dialog-t{
			width:902px;
			height:61px;
			background:#579bfe;	
			position: relative;	
				
		}	
	}

  .dialog-fade-enter-active {
    animation: dialog-fade-in .3s;
  }
  .dialog-fade-leave-active {
    animation: dialog-fade-out .3s;
  }
  @keyframes dialog-fade-in {
    0% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
  }
</style>
