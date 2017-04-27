top<template>
    <div class="fs-container">
      <div class="literally"></div>

      <div class="toolset">
        <span class='toolLabel'>Actions:</span>
        <a href="javascript:void(0);" class='tool' id="open-image">Open image</a>
        <a href="javascript:void(0);" class='tool' id="change-size">Change size</a>
        <a href="javascript:void(0);" class='tool' id="reset-size">Reset size</a>
        <a href="javascript:void(0);" class='tool' id="hide-lc">Teardown</a>
        <a href="javascript:void(0);" class='tool' id="show-lc">Setup</a>
        <a href="javascript:void(0);" class='tool' id="clear-lc">Clear</a>
      </div>

      <div class="toolset">
        <span class='toolLabel'>Tools:</span>
        <a href="javascript:void(0);" class='tool' id="tool-pencil">Pencil</a>
        <a href="javascript:void(0);" class='tool' id="tool-eraser">Eraser</a>
        <a href="javascript:void(0);" class='tool' id="tool-text">Text</a>
        <a href="javascript:void(0);" class='tool' id="tool-line">Line</a>
        <a href="javascript:void(0);" class='tool' id="tool-arrow">Arrow</a>
        <a href="javascript:void(0);" class='tool' id="tool-dashed">Dashed Line</a>
        <a href="javascript:void(0);" class='tool' id="tool-ellipse">Ellipse</a>
        <a href="javascript:void(0);" class='tool' id="tool-rectangle">Rectangle</a>
        <a href="javascript:void(0);" class='tool' id="tool-polygon">Polygon</a>
        <a href="javascript:void(0);" class='tool' id="tool-select">Select</a>
      </div>

<!-- SIZES WON'T WORK UNTIL SIZE EVENT PR IS MERGED! -->
<!--       <div class="toolset" id="tools-sizes">
        <span class='toolLabel'>Sizes:</span>
        <a href="javascript:void(0);" class='tool' id="sizeTool-1">Small</a>
        <a href="javascript:void(0);" class='tool' id="sizeTool-2">Medium</a>
        <a href="javascript:void(0);" class='tool' id="sizeTool-3">Large</a>
      </div> -->

      <div class="toolset" id="tools-colors">
        <span class='toolLabel'>Colors:</span>
        <a href="javascript:void(0);" class='tool' id="colorTool-black">Black</a>
        <a href="javascript:void(0);" class='tool' id="colorTool-blue">Blue</a>
        <a href="javascript:void(0);" class='tool' id="colorTool-red">Red</a>
      </div>

      <br>
      <div class="svg-container"
          style="display: inline-block; border: 1px solid yellow">

          </div>
    </div>
</template>
<script>
// import Vue from 'vue'
// import canvasa from '../static/fastclick'
// import canvasb from '../static/literallycanvas-core'
export default {
  name: 'loginPage',
  data(){
    return{

    }
  },
  methods:{
   gethah(){



    }
  },
  mounted(){
  }
}

</script>
<style src="scss/literallycanvas.css"></style>
<style type="text/css">
      body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        margin: 0;
        background-color: gray;
        height: 2000px;
      }

      .fs-container{
       width: 1000px;
       margin: 50px;
      }

      .literally {
        width: 100%;
        height: 100%;
      }

      .literally img.background, .literally > canvas {
        position: absolute;
      }

      .toolset {
        margin: 1rem;
      }

      .tool {
        background: hsla(199, 26%, 44%, 0.5);
        padding: 0.25rem;
        margin: 0.25rem;
        border-radius: 0.25rem;
        color: #000;
        text-align: center;
        text-decoration: none;
        position: relative; // give after context later
      }

      .tool.current {
        color: #fff;
        background: hsla(199, 26%, 44%, 1);
      }

      .tool:hover {
        text-decoration: underline;
        background: hsla(199, 26%, 44%, 0.75);
      }

      .toolLabel {
        font-size: 1.25rem;
      }

      #tools-sizes.disabled {
        pointer-events: none;
      }

      #tools-sizes.disabled .tool:after {
        content: ' ';
        background: hsla(0, 100%, 100%, 0.75);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 0.25rem;
      }
</style>