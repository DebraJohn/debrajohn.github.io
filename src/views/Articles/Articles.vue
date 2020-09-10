<template>
  <div class="articles">
    <div class="article-container">
      <div class="seeAll" v-if="receivedData && currentCategory" @click="toCategory()">查看全部</div>
      <ArticleList :articleListData="articleList" @switchCategory="getArticleList" />
    </div>
    <div class="category">
      <div class="categoryTitle">我的记本</div>
      <div class="categoryItem" :class="!currentCategory ? 'active' : ''" @click="toCategory()">
        <a-icon type="folder" />
        <span>全部</span>
      </div>
      <div class="categoryItem" 
          :class="currentCategory == item.categoryId ? 'active' : ''"
          v-for="(item, index) in category"
          :key="index"
          @click="toCategory(item.categoryId)">
        <a-icon type="book" />
        <span>{{item.categoryTitle}}</span>
      </div>
    </div>
    <Loading v-if="showLoading" />
  </div>
</template>

<script>
import { formatTime } from '@/core/exc'
import Loading from '@/components/Loading.vue'
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: "articles",
  components: {
    Loading,
    ArticleList
  },
  data() {
    return {
      category: [],
      articleList: [], // 要显示的数据
      receivedData: [], // 储存接口获取的所有文集数据
      formatTime,
      currentCategory: undefined,
      showLoading: false
    }
  },
  watch: {
  },
  created() {
    this.getCategory()
    this.getArticleList(this.$route.params.categoryId)
  },
  beforeMount() {
    this.showLoading = true
  },
  mounted() {
  },
  methods: {
    toArticleDetail(articleId) {
      this.$router.push({ name: 'articleContent', params: { articleId }})
    },
    // 获取文集
    getCategory() {
      API.getCategory().then(res => {
        this.category = res.result;
      })
    },
    // 获取文章列表
    getArticleList(categoryId) {
      if (this.receivedData && this.receivedData.length) {
        // 切换category不用一直调用接口
        this.setArticleList(categoryId)
        return
      }
      this.showLoading = true
      API.getArticleList().then(res => {
        this.receivedData = res.result
        this.setArticleList(categoryId)
        this.showLoading = false
      }).catch(() => this.showLoading = false)
    },
    setArticleList(categoryId) {
        this.currentCategory = categoryId
        this.articleList = categoryId ? this.receivedData.filter(item => item.articleId.substr(0, 2) === categoryId) : this.receivedData
    },
    toCategory(id) {
      if (this.currentCategory === id) return
      this.getArticleList(id)
    }
  },
  
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/common.less";

.articles {
  position: relative;
  display: flex;
  min-height: 300px;
  .seeAll {
    display: none;
  }
  .article-container {
    margin-right: 5rem;
    flex-basis: 75%;
    display: flex;
    flex-direction: column;
    font-size: 13px;
  }
  
  .category {
    flex-basis: 25%;
    text-align: left;
    padding: 1rem 0;
    .categoryTitle {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px dashed #eaeaea;
    }
    .categoryItem {
      font-size: 14px;
      margin: 1rem 0;
      display: flex;
      i {
        margin-right: 0.5rem;
        font-size: 16px;
      }
      &:hover,
      &.active {
        cursor: pointer;
        color: @theme-color;
        font-weight: bold;
      }
    }
  }
  

  @media (max-width: 720px) {
    .seeAll {
      display: block;
      text-decoration: underline;
      color: #555;
    }
    .category {
      display: none;
    }
    .article-container {
      flex-basis: 100%;
      // margin-top: 20px;
      margin-right: 0;
    }
  }
}
</style>

