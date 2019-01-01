function palindrome(src) {
  var reversed = src
    .split("")
    .reverse()
    .join("");

  return reversed === src;
}

// function palindrome(src) {}

// palindrome("12321");

module.exports = {
  palindrome
};

/// abba => abba

// 12321
