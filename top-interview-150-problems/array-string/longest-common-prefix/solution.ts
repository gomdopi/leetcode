export {}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0]
  
  for (let i = strs[0].length; i > 0; i--) {
    let subStr = strs[0].substring(0, i)
    
    if (strs[1].startsWith(subStr)) {
      let currentIdx = 2
      let count = 2

      while (count <= strs.length) {
        if (count === strs.length) {
          return subStr
        } else if (strs[currentIdx++].startsWith(subStr)) {
          count++
          continue
        } else {
          break
        }
      }
    }
  }

  return ''
};

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))

strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))

strs = ["dog","dog","dog","dog","dog","dog","dog"]
console.log(longestCommonPrefix(strs))

strs = ["dog","dog","dog","dog","dog","dog","do"]
console.log(longestCommonPrefix(strs))

strs = ["dog","dogs","doggo","doggest"]
console.log(longestCommonPrefix(strs))