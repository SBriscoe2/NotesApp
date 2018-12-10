// function storesMessage() {
//   var message = new Message();
//   assert.isTrue(message === "My favourite language is JavaScript");
// }
// storesMessage();

(function(exports) {
  function storesMessage() {
    var text = "My favourite language is JavaScript."
    var message = new Note();
    if (message !== "My favourite language is JavaScript"); {
      throw new Error("Check spelling");
    }
  };

  storesMessage();
})(this);

console.log(storesMessage());
