<template>
  <div class="articles">
    <!-- <div class="breadcrumb" v-if="currentCategory" @click="toCategory()">
      <a-icon type="arrow-left" />
    </div> -->
    <div class="article-container">
      <div class="seeAll" v-if="receivedData && currentCategory" @click="toCategory()">查看全部</div>
      <div class="article-list" v-for="(item, index) in articleList" :key="index" ref="articleContent">
        <div class="article-title" @click="toArticleDetail(item.articleId)">{{item.articleTitle}}<span class="subTitle" v-if="item.subTitle">{{item.subTitle}}</span></div>
        <span class="article-time">{{formatTime(item.publishDate)}}
          <span class="article-tag" @click="toCategory(item.articleId.substr(0, 2))">
            <a-icon type="tag"></a-icon>
            <span>{{item.tag}}</span>
          </span>
        </span>
      </div>
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
// import EventBus from '@/core/eventBus';
import { formatTime } from '@/core/exc'
import { get } from '@/core/request'
import Loading from '@/components/Loading.vue'

export default {
  name: "articles",
  components: {
    Loading
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
    // EventBus.$on('stickMenu', data => {
    //   this.stick = data
    // })
  },
  methods: {
    toArticleDetail(articleId) {
      this.$router.push({ name: 'articleContent', params: { articleId }})
    },
    // 获取文集
    getCategory() {
      get('/article/getCategory').then(res => {
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
      get('/article/getArticleList').then(res => {
        this.receivedData = res.result.sort((a, b) => b.publishDate - a.publishDate);
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
    // justify-content: center;
    font-size: 13px;
    // &.stick {
    //   margin-top: 160px;
    // }
    .article-list {
      text-align: left;
      border-bottom: 2px dashed #eaeaea;
      padding: 20px 0;
      .article-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 0.5rem;
        .subTitle {
          font-size: 12px;
          color: #555;
        }
        &:hover {
          &,
          .subTitle{
            color: @theme-color;
            cursor: pointer;
          }
        }
      }
      .article-time {
        font-size: 12px;
      }
      .article-tag {
        // background-color: @theme-color;
        // color: @theme-color;
        // padding: 2px 4px;
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
    }
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

