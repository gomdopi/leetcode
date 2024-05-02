export {}

function fullJustify(words: string[], maxWidth: number): string[] {
  // declare tracking vars
  let result: string[] = [] // result of text justification
  let currentString = '' // string for current line
  let i = 0 // main idx tracking current word being processed
  let n = words.length // number of words to process
  let x = 0 // idx tracking starting word of current line

  // while there are words left to process
  while (i < n) {
    // if adding current word exactly fits "maxWidth"
    if ((currentString + words[i]).length === maxWidth) {
      // add current word to "currentString" and push to "result" then update "x" and reset "currentString"
      currentString += words[i++]
      result.push(currentString)
      currentString = ''
      x = i
    }
    // else if adding current word would exceed "maxWidth"
    else if ((currentString + words[i]).length > maxWidth) {
      // handle space distribution and current line of words to "result"
      let j = x // set new idx to idx of starting word for current line
      let count = maxWidth - (currentString.length - 1) // minus one for the last dangling space
      // distribute spaces evenly from left to right; only words that aren't last should get spaces
      while (j < i - 1 && count > 0) {
        words[j++] += ' '
        count--
        // if j is last word of current line but we still have spaces to add reset j to starting word
        if (j === i - 1 && count > 0) {
          j = x
        }
      }
      // add words with added spaces to "tempStr" starting from starting word of current line
      let tempString = ''
      j = x
      while (j < i) {
        tempString += j < i - 1 ? words[j++] + ' ' : words[j++]
      }
      // in case of only one word in current line
      while (tempString.length < maxWidth) {
        tempString += ' '
      }
      // push to "result" and update/reset relevant vars
      result.push(tempString)
      currentString = ''
      x = i
    }
    // else word can fit in current line so simply add to "currentString"
    else {
      currentString += words[i++] + ' '
    }
  }

  // process last line if needed
  if (currentString.length > 0) {
    let count = maxWidth - currentString.length
    while (count > 0) {
      currentString += ' '
      count--
    }
    result.push(currentString)
  }

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
