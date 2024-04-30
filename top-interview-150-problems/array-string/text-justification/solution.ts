export {}

function fullJustify(words: string[], maxWidth: number): string[] {
  const ans: string[] = []

  if (maxWidth === 1) {
    for (const word of words) {
      for (const char of word) {
        ans.push(char)
      }
    }

    return ans
  }

  // figure out what words go in each line
  // while there are words left in "words"
  while (words.length > 0) {
    // get current word
    let currentWord = words.shift()

    // if current word can fit in current line
    const currentLineLength = ans[ans.length - 1]?.length
    if (currentLineLength + currentWord!.length + 1 <= maxWidth) {
      ans[ans.length - 1] +=
        currentLineLength === 0 ? currentWord : ` ${currentWord}`
    }
    // else move to next line
    else {
      ans.push(currentWord!)
    }
  }

  // handle the "justification"
  // for each "line" in "ans"
  for (let i = 0; i < ans.length - 1; i++) {
    // figure out how many extra spaces are required
    let currentWords = ans[i].split(' ')
    let numberOfWords = currentWords.length
    let totalSpacesRequired = maxWidth - ans[i].length + numberOfWords - 1

    // add extra spaces in between words going from left to right
    // if there is only one word
    if (numberOfWords === 1) {
      // add spaces at the end
      ans[i] += ' '.repeat(totalSpacesRequired)
    }
    // else if there are two words
    else if (numberOfWords === 2) {
      // add spaces in between
      ans[i] =
        currentWords[0] + ' '.repeat(totalSpacesRequired) + currentWords[1]
    } else {
      // if extra spaces can be divided evenly
      if (totalSpacesRequired % (numberOfWords - 1) === 0) {
        let spacesPer = totalSpacesRequired / (numberOfWords - 1)
        ans[i] = currentWords[0]
        for (let j = 1; j < currentWords.length; j++) {
          ans[i] += ' '.repeat(spacesPer) + currentWords[j]
        }
      } else {
        let remainingSpaces = totalSpacesRequired
        ans[i] = currentWords[0]
        let spaceDistribution = new Array(currentWords.length - 1).fill(0)
        while (remainingSpaces > 0) {
          for (let k = 0; k < spaceDistribution.length; k++) {
            spaceDistribution[k]++
            remainingSpaces--
            if (remainingSpaces === 0) break
          }
        }
        for (let h = 0; h < spaceDistribution.length; h++) {
          ans[i] += ' '.repeat(spaceDistribution[h]) + currentWords[h + 1]
        }
      }
    }
  }

  // handle last line
  let totalSpacesRequired = maxWidth - ans[ans.length - 1].length
  ans[ans.length - 1] += ' '.repeat(totalSpacesRequired)

  return ans
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
