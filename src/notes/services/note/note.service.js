import http from "../../core/services/http-common";

class NoteService {
  listAllNotes() {
    return http.get("/note");
  }

  listAllArchivedNotes() {
    return http.get("/note/archived");
  }

  listAllNotArchivedNotes() {
    return http.get("/note/not-archived");
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

  archiveNote(noteId, status) {
    return http.put(`/note/status/${noteId}`, status);
  }
}

export default new NoteService();
