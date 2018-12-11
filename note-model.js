(function (exports) {
function Note(text) {
  this.text = text;
};

Note.prototype.text = function() {
  return this.text;
  console.log(text);
}

exports.Note = Note;
})(this);
var note = new Note("hello");

note.text

// (function (exports) {
//   var text = "My favourite language is JavaScript."
//
//      function Note() {
//        return text;
//      };
//      exports.Note = Note;
// })(this);
//
// console.log(Note());
//
// (function (exports) {
//   var text = "Boo"
//
//      function Message() {
//        return text;
//      };
//      exports.messages = Message;
// })(this);
//
// console.log(messages());
