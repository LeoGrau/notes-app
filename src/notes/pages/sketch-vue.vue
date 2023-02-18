<template>
  <div class="sketch flex justify-content-center align-items-center">
    <custom-tag></custom-tag>
  </div>
</template>

<script>
import CustomTag from "../components/custom-tag.vue";
//Components
export default {
  components: {
    CustomTag,
  },
};
</script>

<style scoped>
.sketch {
  height: 100vh;
}
</style>
