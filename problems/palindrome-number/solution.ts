export {}

// function isPalindrome(x: number): boolean {
//   let s = x.toString()

//   if (s.length === 1) return true

//   let i = 0
//   let j = s.length - 1

//   while (i <= Math.floor(s.length / 2)) {
//     if (s[i++] != s[j--]) {
//       return false
//     }
//   }

//   return true
// };

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false
  }
  let digit = 0
  let result = 0

  let n = x
  while (n) {
      digit = n % 10
      result = result * 10 + digit
      n = Math.floor(n/10)
  }
  
  return result == x
};

let x = 121
console.log(isPalindrome(x))

x = -121
console.log(isPalindrome(x))

x = 10
console.log(isPalindrome(x))