(function (exports) {
  function HtmlList() {
  };

  // HtmlList.prototype.convertList = function() {
  //   var newList = new List();
  //   return this.comList.push(newList);
  // }


  HtmlList.prototype.convertList = function makeUL(array) {

      var ans = document.createElement('ul');
      for (var i = 0; i < array.length; i++) {
          var item = document.createElement('li');
          item.appendChild(document.createTextNode(array[i]));
          ans.appendChild(item);
      }
      return ans;
  }
  exports.HtmlList = HtmlList;
})(this);

// var list = List();
// list.listOfNotes();
var list = new List();
var notes = new Note();
list.addNote("Favourite drink: seltzer");
list.addNote("Favourite food: pizza");
console.log(list.listOfNotes());
var entry = new HtmlList();
entry.convertList(list.listOfNotes());

// console.log(html.comList);


// function makeUL(array) {
//     var list = document.createElement('ul');
//     for (var i = 0; i < array.length; i++) {
//         var div = document.createElement('div');
//         var item = document.createElement('li');
//         div.appendChild(document.createTextNode(array[i]));
//         item.appendChild(document.createTextNode(array[i]));
//         list.appendChild(div,item);
//     }
//     return list;
// }
