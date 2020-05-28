<template>
  <div>
  </div>
</template>

<script>
import URL from "~/plugins/url";
export default {

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
    await app.$axios.get(URL.getMVList,{
        params:{
            id:params.id
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
