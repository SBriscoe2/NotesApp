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
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("this test has passed")}
  }
};
