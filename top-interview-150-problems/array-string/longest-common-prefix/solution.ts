export {}

function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix.length === 0) return ''
    }
  }

  return prefix
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