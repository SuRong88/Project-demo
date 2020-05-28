<template>
  <div>
      <audio src="https://music.163.com/song/media/outer/url?id=1429363572.mp3"></audio>
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
    await app.$axios.get(URL.getSongDetail,{
        params:{
            ids:params.id
        }
    }).then(res => {
      Res = res;
      console.log(Res);
    });
    return {
      list: Res || []
    };
   
  },
  created() {
   
  },
  data() {
    return {
      SEOInfo: {},
      userInfo: []
    };
  }
};
</script>

<style>
</style>
