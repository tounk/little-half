<template>
  <transition name="dialog-fade">
    <div class="wrapper" v-if="isShow">
      <div class="alert">
        <img class="close-btn"  @click="close" src="../../assets/cloud/close.png"/>
          <div class="sign">提示</div>
        <div class="body">

          <div class="cell">
            {{message}}
          </div>
        </div>
        <div class="footer">
          <button @click="onNegativeClick" v-if="!isOnlyPositive" class="negative-btn">{{negativeText}}</button>
          <button @click="onPositiveClick" class="positive-btn">{{positiveText}}</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'my-alert',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    negativeText:{
      type:String,
      default:'取消'
    },
    positiveText:{
      type:String,
      default:'确定'
    },
    message:{
      type:String,
      default:'确定?'
    },
    isOnlyPositive:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      visible: this.isShow
    };
  },
  methods: {
    close:function() {
      this.$emit('closeAlert');
    },
    open:function() {
      this.$emit('openAlert');
    },
    onPositiveClick:function(){
      this.$emit('positiveCb');
    },
    onNegativeClick:function(){
      this.$emit('negativeCb');
      this.close();
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: fixed;
  overflow: auto;
  margin: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999999999;
  background-color: rgba(0, 0, 0, 0.6);
}

.close-btn {
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 12px;
}

.alert {
  height: 180px;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -90px;
  background: #F1F6FF;
  box-sizing: border-box;
}

.close {
  cursor: pointer;
  color: #c0ccda;
  &:hover {
    color: #20a0ff;
  }
}

.sign{
  text-align: left;
  background-color: #579BFE;
  font-size: 14px;
  color:#fff;
  padding-left:20px;
  padding-top:12px;

  padding-bottom: 12px;
}
.body {
  height: 100px;
  width:100%;
  display: table;
  box-sizing:border-box;
  color: #475669;
  font-size: 14px;
  .cell {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size:16px;
    color:#777777;
  }
}

.footer {
  padding:20px;
  padding-top:0;
  text-align: right;
  box-sizing: border-box;
  .negative-btn{
    padding-left:13px;
    padding-right:13px;
    height:25px;
    line-height:25px;
    font-size:12px;
    color:#999999;
    border:1px solid #999999;
    background-color:white;
    margin-right:8px;
  }
  .negative-btn:hover{
  	background:#999999;
  	color:#fff;
  }
  .positive-btn{
    padding-left:13px;
    padding-right:13px;
    height:25px;
    line-height:25px;
    font-size:12px;
    color:#FD6434;
    border:1px solid #FD6434;
    background-color:white;
  }
  .positive-btn:hover{
  	background:#FD6434;
  	color:#fff;
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