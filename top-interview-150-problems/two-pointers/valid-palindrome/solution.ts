export {}

function isPalindrome(s: string): boolean {
  let parsedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
  console.log(parsedString)

  if (parsedString.length === 1) return true

  let i = 0
  let j = parsedString.length - 1

  while (i < Math.floor(parsedString.length / 2)) {
    if (parsedString[i++] != parsedString[j--]) return false
  }

  return true
};

let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))

s = "race a car"
console.log(isPalindrome(s))

s = " "
console.log(isPalindrome(s))