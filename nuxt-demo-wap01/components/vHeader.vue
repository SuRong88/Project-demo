<template>
  <div class="v-header"></div>
</template>
<script>
export default {
  props: {},
  computed: {
    webInfo() {
      return this.$store.state.webInfo;
    }
  },
  created() {
    let that = this;
  },
  data() {
    return {};
  },
  methods: {}
};
</script>