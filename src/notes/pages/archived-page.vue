<template>
  <pv-toast></pv-toast>
  <pv-confirm-dialog></pv-confirm-dialog>
  <crud-note-dialog
    @closeDialog="visible = false"
    @noteChanges="getNotes()"
    v-model:_visible="visible"
    v-model:_noteId="noteId"
    v-model:_mode="mode"
  ></crud-note-dialog>
  <div class="notes-page p-4">
    <div class="mb-2 flex gap-2">
      <h1>Archived Notes</h1>
      <div class="actions"></div>
    </div>
    <div class="grid">
      <div
        v-for="note in notes"
        :key="note.id"
        class="col-12 md:col-6 lg:col-4 xl:col-3"
      >
        <custom-note
          @deleteNote="showConfirmDeleteDialog(note.noteId)"
          @showNote="showDialog(note.noteId)"
          @editNote="showEditDialog(note.noteId)"
          @noteStatusChanged="getNotes()"
          :_note="note"
          :_isArchived="true"
        ></custom-note>
      </div>
    </div>
  </div>
</template>

<script>
//Custom Components
import CustomNote from "../components/custom-note.vue";
import CrudNoteDialog from "../components/crud-note-dialog.vue";
//Models
import Note from "../models/note/note.model";
//Enums
import NoteDialogModes from "../enums/note-dialog-modes";
//Services
import NoteService from "../services/note/note.service";

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
      //Transfer variables
      visible: false,
      noteId: 0,
      mode: 0,
    };
  },
  methods: {
    getNotes() {
      NoteService.listAllArchivedNotes().then((res) => {
        this.notes = res.data;
      });
    },
    deleteNote(noteId) {
      NoteService.deleteNote(noteId);
    },
    showDialog(noteId) {
      this.visible = true;
      this.noteId = noteId;
      console.log(noteId);
    },
    showConfirmDeleteDialog(noteId) {
      const deleteNote = Promise.resolve(this.deleteNote(noteId));
      this.$confirm.require({
        message: "Are you sure you want to delete this note?",
        header: "Confirmation",
        icon: "pi pi-info-circle",
        acceptClass: "p-button-danger",
        accept: async () => {
          deleteNote.then(() => {
            this.getNotes();
            this.$toast.add({
              severity: "success",
              summary: "Confirmed",
              detail: "Record deleted",
              life: 3000,
            });
          });
        },
        reject: () => {
          this.$toast.add({
            severity: "error",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    },
    showEditDialog(noteId) {
      this.noteId = noteId;
      this.visible = true;
      this.mode = this.noteDialogModes.Update;
    },
  },
  created() {
    this.getNotes();
  },

  watch: {
    notes(after, before) {
      console.log("after", after);
      console.log("before", before);
    },
  },
  computed: {
    mynotes() {
      return this.notes;
    },
  },
};
</script>

<style></style>
