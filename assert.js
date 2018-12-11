// var matchingText = {
//   isTrue: function(Check) {
//     if (!Check) {
//       throw new Error("Check failed: " + Check + " is not truthy");
//     }
//   }
// };
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Test failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test has passed")}
  }
};
