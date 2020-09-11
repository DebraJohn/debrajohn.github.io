<template>
  <div class="articleList"
  :class="{
    'slide-fade-enter-active': animationEnterActive,
    'slide-fade-enter': animationEnter
    }">
    <div
      class="article-list"
      v-for="item in articleListData"
      :key="item.publishDate"
    >
      <div class="article-title" @click="toArticleDetail(item.articleId)">
        {{ item.articleTitle }}
        <span class="subTitle" v-if="item.subTitle">{{ item.subTitle }}</span>
      </div>
      <div class="article-time">
        {{ formatTime(item.publishDate) }}
        <span
          class="article-tag"
          @click="toCategory(item.articleId.substr(0, 2))"
        >
          <a-icon type="tag"></a-icon>
          <span>{{ item.tag }}</span>
        </span>
      </div>
      <div v-if="item.intro" class="article-intro">{{ item.intro }}</div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/core/exc'

export default {
  name: "articles",
  components: {
  },
  props: {
    articleListData: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
        formatTime,
        animationEnter: false,
        animationEnterActive: false
    }
  },
  watch: {
    articleListData(n, o) {
      if (!o.length) return
      this.animationEnterActive = false
      this.animationEnter = true
      setTimeout(() => {
        this.animationEnterActive = true
        this.animationEnter = false
      }, 300)
    }
  },
  methods: {
    toArticleDetail(articleId) {
      this.$router.push({ name: 'articleContent', params: { articleId } })
    },
    toCategory(id) {
      if (this.$route.name === 'articles') {
        this.$emit('switchCategory', id)
      } else {
        this.$router.push({ name: 'articles', params: { categoryId: id }})
      }
    }
  },

};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";
.articleList {
  .article-list {
    text-align: left;
    padding: 20px 0;
    border-bottom: 2px dashed #eaeaea;
    &:last-child {
      border: none;
    }
    & > div {
      margin-top: 10px;
      &:first-child {
        margin-top: 0;
      }
    }
    .article-title {
      font-size: 16px;
      font-weight: bold;
      .subTitle {
        font-size: 12px;
        color: #555;
      }
      &:hover {
        &,
        .subTitle {
          color: @theme-color;
          cursor: pointer;
        }
      }
    }
    .article-time {
      font-size: 12px;
    }
    .article-tag {
      margin: 10px;
      border-radius: 5px;
      color: #555;
      text-decoration: underline;
      i {
        position: relative;
        top: 2px;
        margin-right: 5px;
      }
      &:hover {
        color: @theme-color;
        cursor: pointer;
      }
    }
    .article-intro {
      line-height: 25px;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>

