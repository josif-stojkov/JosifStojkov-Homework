let prvstring = "wow";
let vtorstring = "solos";
let tretstring = "manchester7+";
function isPalindrome(str) {
  str = str.replace(/\s+/g, "").toLowerCase(); //cicko google mi rece za toa kako da izbrisam space (/\s+/g, "")
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(prvstring));
console.log(isPalindrome(vtorstring));
console.log(isPalindrome(tretstring));
