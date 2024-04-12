export {}

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false

  let map = new Map()

  for (let c of magazine) {
    let char = map.get(c)
    let count = char === undefined ? 1 : ++char
    map.set(c, count)
  }
  console.log(map)

  for (let c of ransomNote) {
    let char = map.get(c)
    if (char === 0 || char === undefined) return false
    else {
      map.set(c, --char)
    }
  }

  return true
};

function canConstructArray(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false

  Array.from(magazine).forEach(v => {
    if (ransomNote.indexOf(v) >= 0) ransomNote = ransomNote.replace(v, '')
  })

  return ransomNote.length === 0
};

let ransomNote = "a"
let magazine = "b"
console.log(canConstructArray(ransomNote, magazine))

ransomNote = "aa"
magazine = "ab"
console.log(canConstructArray(ransomNote, magazine))

ransomNote = "aa"
magazine = "aab"
console.log(canConstructArray(ransomNote, magazine))

ransomNote = "aac"
magazine = "aab"
console.log(canConstructArray(ransomNote, magazine))