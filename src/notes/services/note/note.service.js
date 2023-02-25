import http from "../../core/services/http-common";

class NoteService {
  listAllNotes() {
    return http.get("/note");
  }

  findNote(noteId) {
    return http.get(`/note/${noteId}`).catch((error) => error.response);
  }

  createNote(newNote) {
    return http.post(`/note`, newNote);
  }

  updateNote(noteId, updatedNote) {
    return http.put(`/note/${noteId}`, updatedNote);
  }

  deleteNote(noteId) {
    return http.delete(`/note/${noteId}`);
  }
}

export default new NoteService();
