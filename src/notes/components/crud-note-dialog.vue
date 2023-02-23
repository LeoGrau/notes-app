<template>
  <div class="crud-note-dialog">
    <pv-dialog
      :style="{ width: '50vw' }"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      v-model:visible="visible"
    >
      <template #header>
        <h2 v-show="mode == noteDialogModes.Create">Create Note</h2>
        <h2 v-show="mode == noteDialogModes.Update">Update Note</h2>
      </template>
      <form class="p-fluid mt-4">
        <div class="field mb-4">
          <div class="p-float-label">
            <pv-input-text v-model="titleInput"></pv-input-text>
            <label for="titleInput">Title</label>
          </div>
        </div>
        <div class="field mb-4">
          <div class="p-float-label">
            <pv-text-area
              :autoResize="true"
              v-model="titleInput"
              au
            ></pv-text-area>
            <label for="titleInput">Content</label>
          </div>
        </div>
      </form>
      <template #footer>
        <div class="actions">
          <pv-button
            label="Save"
            @click="this.$emit('closeDialog')"
          ></pv-button>
          <pv-button
            label="Cancel"
            class="p-button-danger"
            @click="this.$emit('closeDialog')"
          ></pv-button>
        </div>
      </template>
    </pv-dialog>
  </div>
</template>

<script>
import NoteDialogModes from "../enums/note-dialog-modes.js";
export default {
  props: {
    _visible: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      noteDialogModes: NoteDialogModes,
      mode: NoteDialogModes.Update,
      visible: this._visible,
      //Input
      titleInput: "",
    };
  },
  created() {
    console.log("visible from crud: ", this.visible);
  },
  watch: {
    _visible() {
      this.visible = this._visible;
    },
  },
  methods: {},
};
</script>

<style></style>
