export {}

function lengthOfLastWord(s: string): number {
  const words: string[] = s.split(' ')

  let lastWord = ''

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] != '') {
      lastWord = words[i]
      break
    }
  }

  return lastWord.length
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