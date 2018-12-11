(function (exports){
    function noteList(listStore) {
      var htmlList = listStore.join(',');
      return htmlList;
    };

  exports.htmlList = htmlList;
})(this);

console.log(noteList());
