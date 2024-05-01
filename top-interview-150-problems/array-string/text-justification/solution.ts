export {}

function fullJustify(words: string[], maxWidth: number): string[] {
  // declare tracking vars
  let result: string[] = [] // result that will be returned
  let currentString = '' // string representing words going in current line
  let i = 0 // idx of current word being processed
  let n = words.length
  let x = 0 // idx of starting word for current line

  // while there are words left to process
  while (i < n) {
    // if current string + next word = maxWidth
    if ((currentString + words[i]).length === maxWidth) {
      // add word to current string and push current string to result and increment main idx
      currentString += words[i++]
      result.push(currentString)
      // reset current string to empty string
      currentString = ''
      // set starting word idx to main idx
      x = i
    }
    // else if current string + next word > maxWidth
    else if ((currentString + words[i]).length > maxWidth) {
      // set temp tracking idx to idx tracking starting word, new var count to track how many spaces required
      let j = x
      let count = maxWidth - (currentString.length - 1)
      // while count > 0 and temp tracking idx is less than idx of last word to fit in line
      while (count > 0 && j < i - 1) {
        // add one space to end of word at temp tracking idx
        words[j++] += ' '
        // decrement count
        count--
        // if temp tracking idx is equal to last word to fit in line and count > 0
        if (j === i - 1 && count > 0) {
          // reset temp tracking idx to idx tracking starting word
          j = x
        }
      }
      // new var tempStr to build string that will be pushed to result
      let tempStr = ''
      // set temp tracking idx back to starting word idx
      j = x
      // while temp tracking idx < main idx
      while (j < i) {
        // concat word at temp tracking idx to tempStr; add space at the end of the concat if NOT last word in line
        tempStr += j < i - 1 ? words[j++] + ' ' : words[j++]
      }
      // while tempStr length < maxWidth
      while (tempStr.length < maxWidth) {
        // add spaces at the end
        tempStr += ' '
      }
      // push temp string to result
      result.push(tempStr)
      // reset current string
      currentString = ''
      // set starting word idx to main idx
      x = i
    }
    // else
    else {
      // add word at main idx with a space at the end to current string
      currentString += words[i++] + ' '
    }
  }

  // if current string still has word(s); think last line wasn't filled
  if (currentString.length > 0) {
    // let count = maxWidth - length of current string
    let count = maxWidth - currentString.length
    // while count > 0
    while (count > 0) {
      // add spaces to the end; left justify
      currentString += ' '
      // decrement count
      count--
    }
    // push last line to result
    result.push(currentString)
  }

  // return result
  return result
}

let words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.']
let maxWidth = 16
console.log(fullJustify(words, maxWidth))

words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be']
maxWidth = 16
console.log(fullJustify(words, maxWidth))

words = [
  'Science',
  'is',
  'what',
  'we',
  'understand',
  'well',
  'enough',
  'to',
  'explain',
  'to',
  'a',
  'computer.',
  'Art',
  'is',
  'everything',
  'else',
  'we',
  'do'
]
maxWidth = 20
console.log(fullJustify(words, maxWidth))

words = [
  'ask',
  'not',
  'what',
  'your',
  'country',
  'can',
  'do',
  'for',
  'you',
  'ask',
  'what',
  'you',
  'can',
  'do',
  'for',
  'your',
  'country'
]
maxWidth = 16
console.log(fullJustify(words, maxWidth))

words = [
  'The',
  'important',
  'thing',
  'is',
  'not',
  'to',
  'stop',
  'questioning.',
  'Curiosity',
  'has',
  'its',
  'own',
  'reason',
  'for',
  'existing.'
]
maxWidth = 17
console.log(fullJustify(words, maxWidth))
