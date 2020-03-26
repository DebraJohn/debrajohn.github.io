<template>
  <div class="guide" v-if="isShown" @click="backToTop()" title="回到顶部">
    <a-icon type="arrow-up" />
  </div>
</template>

<script>
export default {
  name: "Guide",
  data() {
    return {
      isShown: false,
      scrollPos: 0,
      scrollTimer: null,
      T: 250, // 多少ms内滚完
      speed: 40, // 每10ms滚动的px,
      gap: 10 // 定时器循环间隔
    }
  },
  props: {

  },
  mounted() {
    window.addEventListener('scroll', this.showGuide, true)
  },
  beforeDestroyed() {
    window.removeEventListener('scroll', this.showGuide, true)
  },
  methods: {
    showGuide() {
      this.isShown = this.getScrollTop() > 400
    },
    backToTop() {
      clearTimeout(this.scrollTimer)
      this.scrollPos = this.getScrollTop();
      this.speed = this.scrollPos / this.T * this.gap
      this.scrollToTop()
    },
    getScrollTop() {
      return document.documentElement.scrollTop || document.body.scrollTop
    },
    scrollToTop() {
      this.scrollTimer = setTimeout(() => {
        if (this.scrollPos >= this.speed) {
          this.scrollPos -= this.speed
          window.scrollTo(0, this.scrollPos)
          this.scrollToTop()
        } else {
          this.scrollPos = 0
          window.scrollTo(0, this.scrollPos)
          clearTimeout(this.scrollTimer)
        }
      }, this.gap)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";
.guide {
  position: fixed;
  bottom: 40px;
  right: 20px;
  background: @theme-color;
  border-radius: 5px;
  font-size: 17px;
  color: #fff;
  width: 45px;
  height: 45px;
  box-shadow: 2px 1px 3px 0px #999;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>

