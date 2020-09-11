<template>
  <div class="external-links">
    <div
      v-for="(item, i) in contactData"
      :key="i"
      @click="jumpTo(item.url, item.target)"
      :class="item.name"
      class="account"
    >
      <img :src="item.thumbnail" class="icon" :title="item.title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ExternalLinks",
  data() {
    return {
      contactData: [
        {
          name: "douban",
          url: "https://www.douban.com/people/debrajohn/",
          thumbnail: require("@/assets/images/douban.svg"),
          title: "查看我的豆瓣",
          target: "_blank"
        },
        {
          name: "github",
          url: "https://github.com/debrajohn",
          thumbnail: require("@/assets/images/github.svg"),
          title: "查看我的github",
          target: "_blank"
        },
        {
          name: "wechat",
          url: "javascript:;",
          thumbnail: require("@/assets/images/wechat.svg"),
          title: "查看我的微信公众号",
          target: "_self"
        },
        {
          name: "neteaseCloud",
          url: "https://music.163.com/#/artist?id=1005029",
          thumbnail: require("@/assets/images/neteaseCloud.svg"),
          title: "查看我的网易云",
          target: "_blank"
        },
        {
          name: "weibo",
          url: "https://weibo.com/meteorahui",
          thumbnail: require("@/assets/images/weibo.svg"),
          title: "查看我的微博",
          target: "_blank"
        }
      ]
    };
  },
  methods: {
    jumpTo(url, name) {
      window.open(url, name)
    }
  }
};
</script>

<style lang="less" scope>
.external-links {
  margin: auto;
  display: flex;
  justify-content: space-around;
  max-width: 300px;
  .account {
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
  .icon {
    width: 30px;
  }
  .wechat {
    position: relative;
    &:hover::before {
      content: " ";
      position: absolute;
      left: -60px;
      top: 55px;
      display: inline-block;
      width: 150px;
      height: 150px;
      background-image: url("../assets/images/subscribe.png");
      background-size: 100% 100%;
    }
  }
}
</style>


