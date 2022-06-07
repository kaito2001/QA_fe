<template>
  <div></div>
</template>
<script>
import Intro from "../../components/Parts/Login/Intro.vue";
import { mapGetters } from "vuex";
export default {
  layout: "DashbroadDefault",
  components: { Intro },
  computed: {
    view() {
      return Cookies.get("token");
    },
  },
  methods: {
    ...mapGetters("auth", ["getUser"]),
  },

};
</script>
<style scoped>
</style>