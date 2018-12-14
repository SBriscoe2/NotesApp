(function (exports) {
  function Note(text) {
    this.text = text;
    this.storeNote = []
  }

  Note.prototype.text = function() {
    return this.text;
  }

  Note.prototype.list = function(text) {
    return this.storeNote.push(text);
  }

  exports.Note = Note;
})(this);


var note = new Note("hello");
note.text;
note.list(note);
