<template>
  <div class="about">
    <div v-for="(item, i) in contactData" :key="i" @click="jumpTo(item.url, item.target)" :class="item.name">
      <img :src="item.thumbnail" class="icon" :title="item.title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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
.about {
  display: flex;
  justify-content: center;
  .icon {
    width: 2rem;
    margin: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
  .wechat {
    position: relative;
    &:hover::before {
      content: " ";
      position: absolute;
      top: 4rem;
      left: -2.5rem;
      display: inline-block;
      width: 10rem;
      height: 10rem;
      background-image: url('../../assets/images/subscribe.png');
      background-size: 100% 100%;
    }
  }
}
</style>


