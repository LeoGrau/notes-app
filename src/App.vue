<template>
  <navigation-bar></navigation-bar>
  <router-view></router-view>
</template>

<script>
import NavigationBar from "./notes/components/navigation-bar.vue";
export default {
  components: {
    NavigationBar,
  },
};
</script>

<style></style>
