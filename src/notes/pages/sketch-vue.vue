<template>
  <div class="sketch flex justify-content-center align-items-center">
    <crud-note-dialog></crud-note-dialog>
  </div>
</template>

<script>
import CrudNoteDialog from "../components/crud-note-dialog.vue";
//Components
export default {
  components: {
    CrudNoteDialog,
  },
};
</script>

<style scoped>
.sketch {
  height: 100vh;
}
</style>
