<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from "../components/Parts/Login/Login.vue";
import LoginForm from "../components/Parts/Login/AuthForm.vue";
import { mapGetters } from "vuex";
import Cookies from "js-cookie";

export default {
  name: "IndexPage",
  layout: "LoginDefault",
  computed: {
    view() {
      return Cookies.get("token");
    },
  },
  methods: {
    ...mapGetters("auth", ["getUser"]),
  },
  components: { Login, LoginForm },
};
</script>
