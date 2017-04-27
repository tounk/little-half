<template>
  <div class="paper-w">
    <button type="button" :disabled="currentPage === 1" @click="pre()" class="btn-l"><img src="../../img/arrow-l.png"></button>
    <ul @click="onPagerClick" class="pager">
      <li
        :class="{ active: currentPage === 1 }"
        v-if="pageCount > 0"
        class="number">1</li>
      <li
        class="el-icon more btn-quickprev"
        :class="[quickprevIconClass]"
        v-if="showPrevMore">
      </li>
      <li
        v-for="pager in pagers"
        :class="{ active: currentPage === pager }"
        class="number">{{ pager }}</li>
      <li
        class="el-icon more btn-quicknext"
        :class="[quicknextIconClass]"
        v-if="showNextMore">
      </li>
      <li
        :class="{ active: currentPage === pageCount }"
        class="number"
        v-if="pageCount > 1">{{ pageCount }}</li>
    </ul>
    <button type="button" :disabled="currentPage === pageCount" @click="next()" class="btn-r"><img src="../../img/arrow-r.png"></button>
  </div>

</template>

<script type="text/babel">
  export default {
    name: 'pager',

    props: {
    	
     	/**当前页数**/
      currentPage: Number,
			/**当前页数**/
      pageCount: Number
    },

    watch: {
      showPrevMore(val) {
        if (!val) this.quickprevIconClass = 'el-icon-more';
      },

      showNextMore(val) {
        if (!val) this.quicknextIconClass = 'el-icon-more';
      }
    },

    methods: {
      pre(){
        if (this.currentPage > 1) {
        this.$emit('change', this.currentPage - 1);
        }
      },
      next(){
        var newPage = this.currentPage + 1;
        if (newPage > this.pageCount) {
          newPage = this.pageCount;
        }
        this.$emit('change', newPage);
      },
      onPagerClick(event) {
        const target = event.target;
        if (target.tagName === 'UL') {
          return;
        }

        let newPage = Number(event.target.textContent);
        const pageCount = this.pageCount;
        const currentPage = this.currentPage;

        if (target.className.indexOf('more') !== -1) {
          if (target.className.indexOf('quickprev') !== -1) {
            newPage = currentPage - 5;
          } else if (target.className.indexOf('quicknext') !== -1) {
            newPage = currentPage + 5;
          }
        }

        /* istanbul ignore if */
        if (!isNaN(newPage)) {
          if (newPage < 1) {
            newPage = 1;
          }

          if (newPage > pageCount) {
            newPage = pageCount;
          }
        }

        if (newPage !== currentPage) {
          this.$emit('change', newPage);
        }
      }
    },

    computed: {
      pagers() {
        const pagerCount = 7;

        const currentPage = Number(this.currentPage);
        const pageCount = Number(this.pageCount);

        let showPrevMore = false;
        let showNextMore = false;

        if (pageCount > pagerCount) {
          if (currentPage > pagerCount - 2) {
            showPrevMore = true;
          }

          if (currentPage < pageCount - 2) {
            showNextMore = true;
          }
        }

        const array = [];

        if (showPrevMore && !showNextMore) {
          const startPage = pageCount - (pagerCount - 2);
          for (let i = startPage; i < pageCount; i++) {
            array.push(i);
          }
        } else if (!showPrevMore && showNextMore) {
          for (let i = 2; i < pagerCount; i++) {
            array.push(i);
          }
        } else if (showPrevMore && showNextMore) {
          const offset = Math.floor(pagerCount / 2) - 1;
          for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
            array.push(i);
          }
        } else {
          for (let i = 2; i < pageCount; i++) {
            array.push(i);
          }
        }

        this.showPrevMore = showPrevMore;
        this.showNextMore = showNextMore;

        return array;
      }
    },

    data() {
      return {
        current: null,
        showPrevMore: false,
        showNextMore: false,
        quicknextIconClass: 'el-icon-more',
        quickprevIconClass: 'el-icon-more'
      };
    }
  };
</script>
<style lang="scss" scoped>
$button-height:40px;

button{
	min-width: 35px;
  outline: none;
  cursor: pointer;
  height: $button-height;
  background-color: white;
  border: 1px solid #E6E6E6;

}
.btn-l{
	border-top-left-radius: 15px;
 	border-bottom-left-radius: 15px;
 	margin-right: -5px;
}
.btn-r{
	border-top-right-radius: 15px;
 	border-bottom-right-radius: 15px;
 	margin-left: -5px;
}
.paper-w{
  display: inline-block;
  position:absolute;
  bottom:30px;
  left:50%;
  transform: translateX(-50%);
  
}
.pager{
  user-select: none;
  list-style: none;
  display: inline-block;
  vertical-align: top;
  font-size: 0;
  padding: 0;
  margin: 0;
}
li {
  padding: 0 4px;
  border: 1px solid #E6E6E6;
  border-right: 0;
  background: white;
  vertical-align: top;
  display: inline-block;
  font-size: 16px;
  min-width: 35px;
  height: $button-height;
  line-height: $button-height;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  margin: 0;

  &:last-child {
    border-right: 1px solid #E6E6E6;
  }

  &.btn-quicknext,
  &.btn-quickprev {
    line-height: 40px;
    color: black;
  }

  &.btn-quickprev:hover {
    cursor: pointer;
  }

  &.btn-quicknext:hover {
    cursor: pointer;
  }

  &.active + li {
    border-left: 0;
    padding-left: 5px;
  }

  &:hover {
    color: #fff;
    background:#579bfe;
  }

  &.active {
/*    border-color: black;*/
    /*background-color: white;
    color: blue;*/
    cursor: default;
  }

}
</style>
