<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  props: {},

  head() {
    return {
      title: "",
      meta: [
        { hid: "keywords", name: "keywords", content: "" },
        { hid: "description", name: "description", content: "" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "" }]
    };
  },

  created() {},
  data() {
    return {};
  },

  watch: {
    $route() {
      this.$wSetScroll(0, 0);
    }
  },

  methods: {}
};
</script>

<style>
</style>
