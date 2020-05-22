<template>
  <v-app>
    <Navbar />
    <SideNav />
    <v-content class="content">
      <router-view></router-view>
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",

  components: {
    HelloWorld,
    SideNav,
    Navbar,
    AppFooter,
  },

  data: () => ({}),
};
</script>
<style scoped></style>
