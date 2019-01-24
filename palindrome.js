function isPalindrome (str) {
  if (str.length === 1) {
    return true
  } else if (str.length === 0) {
    return null
  }
  var mid = Math.floor(str.length / 2)
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log('expected true => ', isPalindrome('racecar'))
console.log('expected false => ', isPalindrome('booze'))
console.log('expected false => ', isPalindrome('god'))
console.log('expected true => ', isPalindrome('a'))
console.log('expected true => ', isPalindrome('faaf'))
console.log('expected null => ', isPalindrome(''))
