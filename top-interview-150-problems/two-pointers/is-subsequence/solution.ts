export {}

function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true

  let i = 0
  let j = 0

  while (i < t.length - (s.length - j - 1) && j < s.length) {
    if (s[j] === t[i]) {
      if (j === s.length - 1) return true
      else {
        j++
        i++
      }
    } else {
      i++
    }
  }

  return false
};

let s = "abc"
let t = "ahbgdc"
console.log(isSubsequence(s, t))

s = "axc"
t = "ahbgdc"
console.log(isSubsequence(s, t))

s = ""
t = ""
console.log(isSubsequence(s, t))

s = "a"
t = ""
console.log(isSubsequence(s, t))