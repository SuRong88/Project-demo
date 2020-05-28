<template>
  <div class="index-page">
    <v-header :change="true" class="test">
    </v-header>
  </div>
</template>

<script>
import URL from '~/plugins/url';
export default {
  components: {
    vHeader(resolve) {
      require(['@/components/vHeader'], resolve);
    },
    vFooter(resolve) {
      require(['@/components/vFooter'], resolve);
    }
  },
  head() {
    return {
      // title: this.SEOInfo.seo_title,
      // meta: [
      //   {
      //     hid: 'keywords',
      //     name: 'keywords',
      //     content: this.SEOInfo.seo_keyword
      //   },
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: this.SEOInfo.seo_desc
      //   }
      // ]
    };
  },
  created() {
    
  },
  mounted() {
    // this.$successToast('233')
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style></style>
