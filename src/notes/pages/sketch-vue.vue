<template>
  <div class="sketch flex justify-content-center align-items-center">
    <custom-note></custom-note>
  </div>
</template>

<script>
import CustomNote from "../components/custom-note.vue";
//Components
export default {
  components: {
    CustomNote,
  },
};
</script>

<style scoped>
.sketch {
  height: 100vh;
}
</style>
