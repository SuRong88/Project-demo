<template>
  <div>
    <ul>
      <li v-for="(item,index) in list">
        id:{{item.id}} ———— 歌名:{{item.name}} —————
        <audio controls
          :src="`https://music.163.com/song/media/outer/url?id=${item.id}.mp3`"
        ></audio>
      </li>
    </ul>
  </div>
</template>

<script>
import URL from "~/plugins/url";
export default {
  // validate({ params, route }) {
  //   // 必须是number类型
  //   return /^\d+$/.test(params.page);
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
    await app.$axios
      .get(URL.getSearch, {
        params: {
          keywords: "daneliya"
        }
      })
      .then(res => {
        console.log(res);
        Res = res.data.result.songs;
        console.log(Res);
      });
    return {
      list: Res || []
    };
  },
  created() {},
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
