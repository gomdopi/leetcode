export {}

function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false

  // iterate through s and count number of each distinct letter
  let sMap = new Map()
  for (let c of s) {
    let char = sMap.get(c)
    let count = char ? ++char : 1
    sMap.set(c, count)
  }
  console.log(sMap)

  // iterate through t and count number of each distinct letter
  let tMap = new Map()
  for (let c of t) {
    let char = tMap.get(c)
    let count = char ? ++char : 1
    tMap.set(c, count)
  }
  console.log(tMap)

  let isAnagram = true
  // compare count of each distinct letter found in map
  sMap.forEach((count, char) => {
    // if any of the characters are not found in the other map return false
    if (!tMap.has(char)) {
      isAnagram = false
      return
    }
    // if any of the counts are not equal return false
    if (tMap.get(char) != count) {
      isAnagram = false
      return
    }
  })

  // if we iterate through all of the maps' entries without returning false then return true
  return isAnagram
};

let s = 'anagram'
let t = 'nagaram'
console.log(isAnagram(s, t))

s = 'rat'
t = 'car'
console.log(isAnagram(s, t))

s = 'a'
t = 'a'
console.log(isAnagram(s, t))

s = 'a'
t = 'b'
console.log(isAnagram(s, t))

s = '&'
t = 'b'
console.log(isAnagram(s, t))

s = '&'
t = '&'
console.log(isAnagram(s, t))

let map = new Map()
map.set('&', 1)
console.log(map)
console.log(map.get('&'))