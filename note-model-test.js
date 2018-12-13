function storesMessage() {
  var note = new Note("My favourite language is JavaScript.");
  assert.isTrue(note.text === "My favourite language is JavaScript.");
}
storesMessage();

function listsStoredNotes() {
  var list = new List();
  assert.isTrue(list.listOfNotes().length === 0);
}
listsStoredNotes();

function addNote() {
  var list = new List();
  list.addNote("Favourite dish: pasta");
  assert.isTrue(list.listOfNotes()) === "Favourite dish: pasta";
}
addNote();
