export {}

function reverseWords(s: string): string {
  const sArr = s.split(' ')
  const onlyWords = sArr.filter(w => w.length > 0)

  return onlyWords.reverse().join(' ')
};

let s = "the sky is blue"
console.log(reverseWords(s))

s = "  hello world  "
console.log(reverseWords(s))

s = "a good   example"
console.log(reverseWords(s))