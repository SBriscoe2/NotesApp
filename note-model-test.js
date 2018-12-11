
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

// function createsNote() {
//   var list = new List("Favourite drink: seltzer");
//   assert.isTrue(list.storeNotes === ["Favourite drink: seltzer"]);
// }
