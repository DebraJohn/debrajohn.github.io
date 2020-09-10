<template>
  <div class="about">
    <div class="aboutMe">
      <div class="title">关于我</div>
      <p>庄子卉 | DebraJohn</p>
      <p>业余音乐人 | 专业程序媛</p>
      <p>热爱：摇滚 / 观影 / 阅读</p>
      <!-- <div class="title">社交账号</div> -->
    </div>
    <ExternalLinks />
  </div>
</template>

<script>
import ExternalLinks from '@/components/ExternalLinks.vue'

export default {
  name: "About",
  components: {
    ExternalLinks
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scope>
.about {
  // padding: 0 20px;
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
}
</style>


