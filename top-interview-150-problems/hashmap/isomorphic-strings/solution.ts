export {}

function isIsomorphic(s: string, t: string): boolean {
  if (s.length === 1) return true

  let complements = new Map()
  let replacementsUsed = new Map()

  for (let i = 0; i < s.length; i++) { // iterate through string one char at a time
    let currentChar = complements.get(s[i])
    if (currentChar === undefined) { // if we haven't determined replacement char for s[i] yet
      if (replacementsUsed.has(t[i])) return false // if we have already used the char as a replacement it is not an isomorphic string
      complements.set(s[i], t[i])
      replacementsUsed.set(t[i], '')
    } else if (currentChar != t[i]) return false
  }

  return true
};

/*
 * BELOW NOT IDEAL BECAUSE "indexOf" has time complexity of O(m * n)
 * m = length of string to search in
 * n = length of pattern to search for
 */
// function isIsomorphic(s: string, t: string): boolean {
//   for (let i = 1; i < s.length; i++){
//       if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
//   }
//   return true
// };

let s = 'egg'
let t = 'add'
console.log(isIsomorphic(s, t))

s = 'foo'
t = 'bar'
console.log(isIsomorphic(s, t))

s = 'paper'
t = 'title'
console.log(isIsomorphic(s, t))

s = 'a'
t = 'a'
console.log(isIsomorphic(s, t))

s = 'a'
t = 'b'
console.log(isIsomorphic(s, t))

s = 'aa'
t = 'bc'
console.log(isIsomorphic(s, t))

s = 'aa'
t = 'bb'
console.log(isIsomorphic(s, t))

s = 'a1a'
t = 'b2b'
console.log(isIsomorphic(s, t))

s = 'a1a'
t = 'b1b'
console.log(isIsomorphic(s, t))

s = 'badc'
t = 'baba'
console.log(isIsomorphic(s, t))