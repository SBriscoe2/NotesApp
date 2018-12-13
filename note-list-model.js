  (function (exports) {
   function List() {
     this.storeNotes = [];
     // this.string = string;
   };

   List.prototype.listOfNotes = function() {
     return this.storeNotes;
   }

  List.prototype.addNote = function(text) {
    var notes = new Note(text);
    this.storeNotes.push(notes);
  }

  exports.List = List;
})(this);

// console tests
  var notes = new Note();
  var list = new List();

  // list.listOfNotes();
  list.addNote("Favourite drink: seltzer");
  list.addNote("Favourite food: pizza");
  list.listOfNotes();
