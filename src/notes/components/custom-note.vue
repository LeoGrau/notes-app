<template>
  <div class="custom-note">
    <div class="card p-2">
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
              <span>{{ note.date.toLocaleString().substring(0, 18) }}</span>
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
import Note from "../models/note.model.js";

export default {
  props: {
    note: {
      type: Note,
      default: new Note(
        1,
        "title",
        "content",
        new Date("December 1, 1995 17:15:00")
      ),
    },
  },
  data() {
    return {
      //Data for component
      actions: [
        {
          icon: "bi bi-trash-fill",
          event: () => {
            this.$emit("deleteNote");
          },
        },
        {
          icon: "bi bi-archive-fill",
          event: () => {
            this.$emit("archiveNote");
          },
        },
        {
          icon: "bi bi-pencil-fill",
          event: () => {
            this.$emit("editNote");
          },
        },
      ],
    };
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
