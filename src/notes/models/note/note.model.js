export default class Note {
  constructor(noteId, title, content, lastTimeEdited) {
    this.noteId = noteId;
    this.title = title;
    this.content = content;
    this.lastTimeEdited = lastTimeEdited;
  }
}
