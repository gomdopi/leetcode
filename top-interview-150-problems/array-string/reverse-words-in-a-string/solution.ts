export {}

function reverseWords(s: string): string {
  return s.split(' ').filter(w => w).reverse().join(' ')
};

let s = "the sky is blue"
console.log(reverseWords(s))

s = "  hello world  "
console.log(reverseWords(s))

s = "a good   example"
console.log(reverseWords(s))