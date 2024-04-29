export {}

function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length) return -1

  if (needle === haystack) return 0

  // find all indexes in "haystack" that equal first char of "needle"
  let possibleStarts: number[] = []
  for (let i = haystack.length - 1; i >= 0; i--) {
    if (haystack[i] === needle[0]) {
      possibleStarts.push(i)
    }
  }

  let idx
  while (possibleStarts.length > 0) {
    idx = possibleStarts.pop()

    if (idx !== undefined) {
      for (let i = 0; i < needle.length; i++) {
        if (haystack[idx! + i] != needle[i]) {
          break
        }
        if (i === needle.length - 1) {
          return idx
        }
      }
    }
  }

  return -1
}

let haystack = 'sadbutsad'
let needle = 'sad'
console.log(strStr(haystack, needle))

haystack = 'leetcode'
needle = 'leeto'
console.log(strStr(haystack, needle))

haystack = 'sabutsad'
needle = 'sad'
console.log(strStr(haystack, needle))

haystack = 'sabutsad'
needle = 'a'
console.log(strStr(haystack, needle))

haystack = 'sabutsad'
needle = 'ad'
console.log(strStr(haystack, needle))

haystack = 'mississippi'
needle = 'issip'
console.log(strStr(haystack, needle))

haystack = 'mississippi'
needle = 'issipi'
console.log(strStr(haystack, needle))
