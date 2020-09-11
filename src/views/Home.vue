<template>
  <div class="home">
    <div class="leftSide">
      <div class="board article">
        <ArticleList :articleListData="recommendedArticle" />
      </div>
    </div>
    <div class="rightSide">
      <div class="board infomation">
        <div class="per-info avatar" @click="toAbout()">
          <img :src="require('@/assets/images/avatar.jpg')" alt="">
        </div>
        <div class="per-info name">DebraJohn</div>
        <div class="per-info">专业程序媛 | 业余音乐人</div>
        <div class="per-info">前端开发工程师</div>
        <div class="per-info">摇滚迷 | 书影音爱好者</div>
        <ExternalLinks class="external-links" />
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/core/eventBus';
import { formatTime } from '@/core/exc'
import ExternalLinks from '@/components/ExternalLinks.vue'
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: "home",
  components: {
    ExternalLinks,
    ArticleList
  },
  data() {
    return {
      formatTime,
      recommendedArticle: []
    }
  },
  created() {
    this.getArticleList()
  },
  mounted() {
  },
  methods: {
    getArticleList() {
      API.getRecommendedArticle().then(r => {
        this.recommendedArticle = r.result
        console.log(this.recommendedArticle)
      })
    },
    toAbout() {
      this.$router.push({ name: 'about' })
    }
  }

};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";

.home {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  .leftSide {
    width: 70%;
    margin-left: -20px;
  }
  .rightSide {
    width: 30%;
    margin-left: 20px;
  }
  .board {
    background: #f9f9f9;
    padding: 0 20px;
    box-shadow: 10px 10px 10px #eee;
    border-radius: 20px;
    &.infomation {
      padding: 20px;
      .per-info {
        margin: 10px;
        text-align: center;
      }
      .avatar {
        width: 100px;
        height: 100px;
        margin: auto;
        border-radius: 50%;
        overflow: hidden;
        transition: all 0.3s;
        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
        & > img {
          width: 100%;
        }
      }
      .name {
        font-size: 16px;
        font-weight: bold;
        margin: 15px;
      }
    }
    .external-links {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 2px dashed #eaeaea;
    }
  }
}
@media (max-width: 720px) {
  .home {
    flex-direction: column-reverse;
    .leftSide,
    .rightSide {
      width: 100%;
      margin: 0 0 20px 0;
    }
  }
}
</style>

