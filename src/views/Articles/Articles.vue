<template>
  <div class="articles" :class="stick ? 'stick': ''">
    <Article />
  </div>
</template>

<script>
import Article from '@/components/Article/Article.vue';
import EventBus from '@/core/eventBus';

export default {
  name: "articles",
  components: {
    Article
  },
  data() {
    return {
      Article,
      stick: false
    }
  },
  methods: {
  },
  created: function() {
  },
  mounted() {
    EventBus.$on('stickMenu', data => {
      this.stick = data
    })
  }
  
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";

.articles {
  display: flex;
  justify-content: center;
  font-size: 13px;
  &.stick {
    margin-top: 160px;
  }
  // width: 900px;
  .card {
    // flex: 1;
    width: 300px;
    height: 400px;
    background: #f1f5ff;
    margin: 0.5rem;
    & > div {
      text-align: left;
      margin: 1rem;
    }
    &:hover {
      background: @theme-color;
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>

