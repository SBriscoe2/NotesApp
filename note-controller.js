(function (exports) {
  function Text() {
  };

  Text.prototype.changeText = function(text) {
    var change = document.getElementById("app").innerHTML = "Howdy World";
  }
  exports.Text = Text;
})(this);

var greeting = new Text();
greeting.changeText();
