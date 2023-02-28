export default class Note {
  constructor(noteId, title, content, lastTimeEdited, archived) {
    this.noteId = noteId;
    this.title = title;
    this.content = content;
    this.lastTimeEdited = lastTimeEdited;
    this.archived = archived;
  }
}
