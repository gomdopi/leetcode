export {}

function reverseWords(s: string): string {
  let i = s.length - 1
  let reverse = ''

  while (i >= 0) {
    if (s[i] != ' ') {
      let word = s[i]

      while (i > 0 && s[--i] != ' ') {
        word = s[i] + word
      }

      reverse += reverse.length === 0 ? word : ' ' + word
    }

    while (i >= 0 && s[--i] == ' ') {
    }
  }

  return reverse
};

// function reverseWords(s: string): string {
//   return s.split(' ').filter(w => w).reverse().join(' ')
// };

let s = "the sky is blue"
console.log(reverseWords(s))

s = "  hello world  "
console.log(reverseWords(s))

s = "a good   example"
console.log(reverseWords(s))