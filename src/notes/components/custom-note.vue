<template>
  <div class="custom-note">
    <pv-progress-spinner v-show="_isLoading"></pv-progress-spinner>
    <div class="card p-2" v-show="!_isLoading">
      <div class="flex">
        <div class="left flex gap-2 align-items-center">
          <i
            class="bi bi-sticky-fill text-6xl"
            @click="this.$emit('showNote')"
          ></i>
          <div class="data">
            <h3>{{ note.title }}</h3>
            <p>
              <strong>Date: </strong>
              <span>{{
                new Date(note.lastTimeEdited).toLocaleDateString()
              }}</span>
            </p>
          </div>
        </div>
        <div class="actions">
          <ul class="flex gap-1">
            <li
              style="font-size: 17px"
              v-for="action in actions"
              :key="action.icon"
              :class="action.icon"
              @click="action.event"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Models
import Note from "../models/note/note.model.js";
//Service
import NoteService from "../services/note/note.service";

export default {
  props: {
    _note: {
      type: Object,
      required: true,
    },
    _isArchived: {
      type: Boolean,
      required: true,
    },
    _isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      note: Note.prototype,
      //Data for component
      actions: [],
    };
  },
  created() {
    this.setNote();
    this.setActions();
  },

  methods: {
    setNote() {
      this.isLoading = false;
      this.note = new Note(
        this._note.noteId,
        this._note.title,
        this._note.content,
        this._note.lastTimeEdited,
        this._note.archived
      );
    },
    archiveThisNote() {
      NoteService.archiveNote(this.note.noteId, true).then(() => {
        this.$emit("noteStatusChanged");
      });
    },
    restoreThisNote() {
      NoteService.archiveNote(this.note.noteId, false).then(() => {
        this.$emit("noteStatusChanged");
      });
    },
    setActions() {
      this.actions = [
        {
          icon: "bi bi-trash-fill",
          event: () => {
            this.$emit("deleteNote", this._note.noteId);
          },
        },
        (() => {
          return this._isArchived
            ? {
                icon: "bi bi-upload",
                event: () => {
                  this.restoreThisNote();
                },
              }
            : {
                icon: "bi bi-archive-fill",
                event: () => {
                  this.archiveThisNote();
                },
              };
        })(),
        {
          icon: "bi bi-pencil-fill",
          event: () => {
            this.$emit("editNote", this._note.noteId);
          },
        },
      ];
    },
  },
  watch: {
    _note() {
      this.note = this._note;
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  background-color: var(--blue-100);
}

.card .flex {
  position: relative;
}

.card > i.bi.bi-sticky-fill {
  font-size: 2rem;
}

.actions {
  position: absolute;
  width: fit-content;
  bottom: 0px;
  right: 0px;
}

.left i,
.actions li {
  cursor: pointer;
  transition: color 0.1s ease-in;
}

.left i:hover,
.actions li:hover {
  color: var(--blue-700);
}
</style>
