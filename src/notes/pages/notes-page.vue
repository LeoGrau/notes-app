<template>
  <crud-note-dialog
    @closeDialog="visible = false"
    v-model:_visible="visible"
  ></crud-note-dialog>
  <div class="notes-page p-4">
    <div class="mb-2 flex gap-2">
      <h1>My Notes</h1>
      <div class="actions">
        <pv-button label="New Note" icon="bi bi-plus-lg"></pv-button>
      </div>
    </div>
    <div class="grid">
      <div
        v-for="note in notes"
        :key="note.id"
        class="col-12 md:col-6 lg:col-4 xl:col-3"
      >
        <custom-note @editNote="visible = true" :note="note"></custom-note>
      </div>
    </div>
  </div>
</template>

<script>
//Custom Components
import CustomNote from "../components/custom-note.vue";
import CrudNoteDialog from "../components/crud-note-dialog.vue";
//Models
import Note from "../models/note.model";
//Enums
import NoteDialogModes from "../enums/note-dialog-modes";
export default {
  components: {
    CustomNote,
    CrudNoteDialog,
  },
  data() {
    return {
      noteDialogModes: NoteDialogModes,
      notes: [
        new Note(1, "title", "content", new Date("December 1, 1995 17:15:00")),
        new Note(2, "title", "content", new Date("December 1, 1995 17:15:00")),
        new Note(3, "title", "content", new Date("December 1, 1995 17:15:00")),
        new Note(4, "title", "content", new Date("December 1, 1995 17:15:00")),
        new Note(5, "title", "content", new Date("December 1, 1995 17:15:00")),
      ],
      visible: false,
    };
  },
};
</script>

<style></style>
