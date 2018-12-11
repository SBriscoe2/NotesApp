(function (exports) {
  function List() {
    this.storeNotes = [];
  };

  List.prototype.listOfNotes = function() {
    return this.storeNotes;
  }





  exports.List = List;
})(this);

/////////////////
  var list = new List;
  list.listOfNotes();


(function (exports){
  function createNote(string) {
    return string
  };
  exports.createNote = createNote;
})(this);

console.log(createNote("Favourite drink: seltzer"));

(function (exports){
  function addnote(string){
    storeNotes.push(string)
    return storeNotes
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
