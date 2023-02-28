<template>
  <div class="crud-note-dialog">
    <pv-dialog
      @hide="this.$emit('closeDialog')"
      :style="{ width: '50vw' }"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      v-model:visible="visible"
    >
      <template #header>
        <h2 v-show="_mode == noteDialogModes.Create">Create Note</h2>
        <h2 v-show="_mode == noteDialogModes.Update">Update Note</h2>
        <h2 v-show="_mode == noteDialogModes.Read">See Note</h2>
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
              v-model="contentInput"
            ></pv-text-area>
            <label for="titleInput">Content</label>
          </div>
        </div>
      </form>
      <template #footer>
        <div class="actions">
          <pv-button
            label="Save"
            @click="
              _mode == noteDialogModes.Create ? addNote() : updateNote(_noteId)
            "
          ></pv-button>
          <pv-button
            label="Cancel"
            class="p-button-danger"
            @click="this.visible = false"
          ></pv-button>
        </div>
      </template>
    </pv-dialog>
  </div>
</template>

<script>
//Enums
import NoteDialogModes from "../enums/note-dialog-modes.js";
//Service
import NoteService from "../services/note/note.service";
//Models
//import Note from "../models/note/note.model";
import UpdateNote from "../models/note/update-note.model";
import AddNote from "../models/note/add-note.model";

export default {
  props: {
    _visible: {
      required: true,
      type: Boolean,
    },
    _noteId: {
      default: () => 0,
      type: Number,
    },
    _mode: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      noteDialogModes: NoteDialogModes,
      mode: NoteDialogModes.Update,
      visible: this._visible,
      noteId: this._noteId,
      //Input
      titleInput: "",
      contentInput: "",
    };
  },
  created() {
    console.log("visible from crud: ", this.visible);
    this.setNote(this.noteId);
  },
  watch: {
    _visible() {
      this.visible = this._visible;
      if (this.visible && this._mode != this.noteDialogModes.Create) {
        this.setNote(this.noteId);
      } else {
        this.resetValues();
      }
      console.log(this.titleInput, this.contentInput);
    },
    _noteId() {
      this.noteId = this._noteId;
      console.log(this.noteId);
    },
  },
  methods: {
    //Dialog literals
    closeDialog() {
      this.visible = false;
    },
    resetValues() {
      this.titleInput = "";
      this.contentInput = "";
    },
    setNote(noteId) {
      console.log(noteId);
      NoteService.findNote(noteId).then((res) => {
        if (res.status == 200) {
          this.titleInput = res.data.title;
          this.contentInput = res.data.content;
        } else {
          console.log("Error");
        }
      });
    },
    updateNote(noteId) {
      const findNote = NoteService.findNote().then((res) => {
        this.titleInput = res.data.title;
        this.contentInput = res.data.content;
      });

      var updatedNote = new UpdateNote(
        this.titleInput,
        this.contentInput,
        false
      );

      const updateNote = NoteService.updateNote(noteId, updatedNote).then(
        () => {
          this.$emit("noteChanges");
        }
      );

      Promise.all([findNote, updateNote, this.closeDialog()]).then(() => {
        console.log("I did it!");
        //this.$emit("noteChanges");
      });
    },
    addNote() {
      var newNote = new AddNote(this.titleInput, this.contentInput);
      const addNote = NoteService.createNote(newNote);

      Promise.all([addNote, this.closeDialog()]).then(() => {
        this.$emit("noteChanges");
      });
    },
  },
};
</script>

<style></style>
