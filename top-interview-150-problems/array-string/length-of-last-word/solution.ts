export {}

function lengthOfLastWord(s: string): number {
  // trim the end of the string
  let trimmedString = s.trimEnd()

  // return the remaining length after finding the index of the last ' ' char
  // extra 1 subtracted to account for that arrays are 0-indexed
  return trimmedString.length - (trimmedString.lastIndexOf(' ') + 1)
};

let s = "Hello World"
console.log((lengthOfLastWord(s)))

s = "   fly me   to   the moon  "
console.log((lengthOfLastWord(s)))

s = "luffy is still joyboy"
console.log((lengthOfLastWord(s)))

s = "luffy"
console.log((lengthOfLastWord(s)))

s = " luffy "
console.log((lengthOfLastWord(s)))

s = "   luffy"
console.log((lengthOfLastWord(s)))

s = "luffy   "
console.log((lengthOfLastWord(s)))

s = "a"
console.log((lengthOfLastWord(s)))