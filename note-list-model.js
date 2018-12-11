  (function (exports) {
   function List() {
     this.storeNotes = [];
     // this.string = string;
   };

   List.prototype.listOfNotes = function() {
     return this.storeNotes;
   }

  List.prototype.addnote = function(text) {
    var notes = new Note(text);
    this.storeNotes.push(notes);
  }

  exports.List = List;
})(this);

// console tests
  var list = new List();
  var notes = new Note();
  list.listOfNotes();
  list.addnote("Favourite drink: seltzer");
  list.listOfNotes();

  // List.prototype.createNote = function(string) {
  //
  //   return this.string
  // }
