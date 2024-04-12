export {}

function wordPattern(pattern: string, s: string): boolean {
  let words = s.split(' ')

  if (pattern.length === 1 && words.length === 1) return true

  if (pattern.length != words.length) return false
  
  let map = new Map()
  let mapped = new Map()

  for (let i = 0; i < words.length; i++) {
    let word = map.get(pattern[i])
    
    if (!word) { // if undefined
      if (mapped.has(words[i])) return false // char already has word mapped to it
      else mapped.set(words[i], '')
      map.set(pattern[i], words[i]) // set the pattern's char to matching word
    } else if (word != words[i]) return false
  }

  return true
};

let pattern = 'abba'
let s = 'dog cat cat dog'
console.log(wordPattern(pattern, s))

pattern = 'abba'
s = 'dog cat cat fish'
console.log(wordPattern(pattern, s))

pattern = 'aaaa'
s = 'dog cat cat dog'
console.log(wordPattern(pattern, s))

pattern = 'a'
s = 'a'
console.log(wordPattern(pattern, s))

pattern = 'a'
s = 'dog'
console.log(wordPattern(pattern, s))

pattern = 'abbc'
s = 'dog cat cat dog'
console.log(wordPattern(pattern, s))

pattern = 'cbac'
s = 'dog cat cat dog'
console.log(wordPattern(pattern, s))

pattern = 'baba'
s = 'dog cat dog cat'
console.log(wordPattern(pattern, s))

pattern = 'baca'
s = 'dog cat dog cat'
console.log(wordPattern(pattern, s))

pattern = 'baba'
s = 'dog cat dog fish'
console.log(wordPattern(pattern, s))