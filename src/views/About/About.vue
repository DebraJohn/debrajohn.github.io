<template>
  <div class="about">
    <div class="aboutMe">
      <div class="title">关于我</div>
      <p>庄子卉 | DebraJohn</p>
      <p>业余音乐人 | 专业程序媛</p>
      <p>热爱：摇滚 / 观影 / 阅读</p>
      <!-- <div class="title">社交账号</div> -->
    </div>
    <div class="contact">
      <div v-for="(item, i) in contactData" :key="i" @click="jumpTo(item.url, item.target)" :class="item.name">
        <img :src="item.thumbnail" class="icon" :title="item.title" />
      </div>
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
  padding: 0 20px;
  .aboutMe {
    text-align: left;
    .title {
      font-weight: bold;
      padding-left: 9px;
      border-left: 6px solid #628bd8;
      margin: 10px 0;
    }
    P {
      text-indent: 1em;
      margin: 10px 0;
      font-size: 15px;
    }
  }
  .contact {
    display: flex;
    justify-content: center;
    // text-indent: 1em;
    .icon {
      width: 30px;
      margin: 20px;
      &:hover {
        cursor: pointer;
      }
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


