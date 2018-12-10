// function Note(text) {
//   this.text = "My favourite language is JavaScript.";
// };
//
// Note.prototype.message = function() {
//   return text;
//   console.log(text);
// }
//
// var call = new Note();
//
// call.text

(function (exports) {
  var text = "My favourite language is JavaScript."

     function Note() {
       return text;
     };
     exports.Note = Note;
})(this);

console.log(Note());

(function (exports) {
  var text = "Boo"

     function Message() {
       return text;
     };
     exports.messages = Message;
})(this);

console.log(messages());
