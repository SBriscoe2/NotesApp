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

function createsNote() {
  var list = new List();
  assert.isTrue(list.createNote("Favourite drink: seltzer") === "Favourite drink: seltzer");
}
createsNote();

function addNote() {
  var list = new List();
  var add = list.createNote("Favourite dish: pasta")
  list.addnote(add)
  assert.isTrue(list.listofNotes() === ["Favourite dish: pasta"]);
}
addnote();
