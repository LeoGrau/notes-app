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
    <div class="mb-2 flex gap-5 align-items-center">
      <h1>My Notes</h1>
      <div class="actions flex align-items-center gap-3">
        <router-link to="archived-notes"
          ><span> > Go to archived notes</span></router-link
        >
        <pv-button
          label="New Note"
          icon="bi bi-plus-lg"
          @click="
            visible = true;
            mode = noteDialogModes.Create;
          "
        ></pv-button>
      </div>
    </div>
    <div class="grid">
      <div
        v-show="!isLoading"
        v-for="note in notes"
        :key="note.id"
        class="col-12 md:col-6 lg:col-4 xl:col-3"
      >
        <custom-note
          v-model:_isLoading="isLoading"
          @deleteNote="showConfirmDeleteDialog(note.noteId)"
          @showNote="showDialog(note.noteId)"
          @editNote="showEditDialog(note.noteId)"
          @noteStatusChanged="getNotes()"
          :_note="note"
          :_isArchived="false"
        ></custom-note>
      </div>
    </div>
  </div>
</template>

<script>
//Custom Components
import CustomNote from "../components/custom-note.vue";
import CrudNoteDialog from "../components/crud-note-dialog.vue";
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
      notes: [],
      //Transfer variables
      visible: false,
      noteId: 0,
      mode: 0,
      isLoading: true,
    };
  },
  methods: {
    getNotes() {
      NoteService.listAllNotArchivedNotes().then((res) => {
        this.notes = res.data;
        this.isLoading = false;
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
