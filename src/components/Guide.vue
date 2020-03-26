<template>
  <div class="guide" v-if="isShown" @click="backToTop()">
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
      rate: 250,
      speed: 40
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
      this.speed = this.scrollPos / this.rate * 10
      this.scrollToTop()
    },
    getScrollTop() {
      return document.documentElement.scrollTop || document.body.scrollTop
    },
    scrollToTop() {
      this.scrollTimer = setTimeout(() => {
        if (this.scrollPos >= 10) {
          this.scrollPos -= this.speed
          window.scrollTo(0, this.scrollPos)
          this.scrollToTop()
        } else {
          this.scrollPos = 0
          window.scrollTo(0, this.scrollPos)
          clearTimeout(this.scrollTimer)
        }
      }, 10)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";
.guide {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: @theme-color;
  font-size: 17px;
  color: #fff;
  width: 45px;
  height: 45px;
  box-shadow: 2px 1px 3px 0px #999;
  transition: all 0.3s ease;
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>

