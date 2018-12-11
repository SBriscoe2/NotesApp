(function (exports){
  var listStore = ["one"]
    function noteList() {
      return listStore;
    };

  exports.noteList = noteList;
  exports.listStore = listStore
})(this);

console.log(noteList());

(function (exports){
  function createNote(string) {
    return string
  };
  exports.createNote = createNote;
})(this);

console.log(createNote("Favourite drink: seltzer"));

(function (exports){
  function addnote(string){
    listStore.push(string)
    return listStore
  };
  exports.addnote = addnote;
})(this);

console.log(addnote("howdy"));

// function Notes(text) {
//   this.text = text
//   this.StoreNotes = [];
// };
//
// Notes.prototype.ListOfNotes = function () {
//   return this.StoreNotes;
// };
//
// Notes.prototype.addNotes = function (note) {
//   this.StoreNotes.push(note);
// };
