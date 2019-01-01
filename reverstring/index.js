// function reverseString(src) {
//   var resverString = "";
//   for (let index = src.length - 1; index >= 0; index--) {
//     const char = src.charAt(index);
//     resverString = resverString + char;
//   }

//   return resverString;
// }

// function reverseString(src) {
//   return src
//     .split("")
//     .reverse()
//     .join("");
// }

// function reverseString(src) {
//   let reserved = "";
//   for (let character of src) {
//     reserved = character + reserved;
//   }
//   return reserved;
// }

function reverseString(src) {
  return src.split("").reduce((acc, current) => current + acc, "");
}

module.exports = {
  reverseString
};
