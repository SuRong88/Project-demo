<template>
  <div style="word-break:break-all;">
    <div>
      <img :src="profile.avatarUrlavatarUrl" alt />
      <h2>昵称</h2>
      <div>{{profile.nickname}}</div>
      <h2>出生日期</h2>
      <div>{{profile.birthday | dateformat('YYYY-MM-DD')}}</div>
      <div>{{2209017600000 | dateformat('YYYY-MM-DD')}}</div>
      <h2>关于</h2>
      <div class="text-j">{{profile.signature}}</div>
      <h2>建立时间</h2>
      <div>{{profile.createTime | dateformat('YYYY-MM-DD')}}</div>
    </div>
  </div>
</template>

<script>
import URL from "~/plugins/url";
export default {
  // default模板
  // layout: function(context) {
  //   return 'default-demo';
  // },
  // 参数校验（失败直接跳转至404页面）
  // validate({ params, route }) {
  //   // 必须是number类型
  //   return /^\d+$/.test(params.id);
  // },
  components: {
    vHeader(resolve) {
      require(["@/components/vHeader"], resolve);
    },
    vFooter(resolve) {
      require(["@/components/vFooter"], resolve);
    }
  },
  head() {
    // return {
    //   title: this.SEOInfo.seo_title,
    //   meta: [
    //     {
    //       hid: "keywords",
    //       name: "keywords",
    //       content: this.SEOInfo.seo_keyword
    //     },
    //     {
    //       hid: "description",
    //       name: "description",
    //       content: this.SEOInfo.seo_desc
    //     }
    //   ]
    // };
  },
  async asyncData({ store, params, route, app }) {
    let Res;
    await app.$axios.get(URL.getUserInfo).then(res => {
      Res = res.data;
      console.log(Res);
    });
    return {
      userInfo: Res || []
    };
  },
  created() {},
  data() {
    return {
      SEOInfo: {},
      userInfo: []
    };
  },
  computed: {
    profile() {
      return this.userInfo.profile;
    }
  }
};
</script>

<style>
</style>
