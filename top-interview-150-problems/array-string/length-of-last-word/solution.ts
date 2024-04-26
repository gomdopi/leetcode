export {}

function lengthOfLastWord(s: string): number {
  let trimmedS = s.trimEnd()
  let lastWordIdx = trimmedS.lastIndexOf(' ')

  return trimmedS.length - lastWordIdx - 1
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