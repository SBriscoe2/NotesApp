// var matchingText = {
//   isTrue: function(Check) {
//     if (!Check) {
//       throw new Error("Check failed: " + Check + " is not truthy");
//     }
//   }
// };
(function(exports) {
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};
exports.assert = assert;
})(this);

  
