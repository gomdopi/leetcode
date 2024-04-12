export {}

// check if it is an open parentheses
function isOpenParen(paren: string) {
  return paren === '(' || paren === '{' || paren === '['
}

// return whether most recent open paren encountered is a valid match for the close paren we are comparing against
function isValidOpenParen(openParen: string, closeParen: string) {
  switch (closeParen) {
    case ')':
      return openParen === '('
    case '}':
      return openParen === '{'
    case ']':
      return openParen === '['
  }
}

function isValid(s: string): boolean {
  if (s.length === 1) return false

  // create a "stack" using the array object to store open parentheses
  let openParens: string[] = []
  
  // iterate through s one character at a time
  for (let p of s) {
    // when we encounter an open parentheses add it to the stack and move on
    if (isOpenParen(p)) {
      openParens.push(p)
      continue
    }
    // when we encounter a close parentheses
    // if it matches the last open parentheses encountered "close" it and move on
    let mostRecentOpenParens = openParens.pop()
    if (mostRecentOpenParens && isValidOpenParen(mostRecentOpenParens, p)) {
      continue
    }
    // else if it doesn't match return false
    else {
      return false
    }
  }

  // if 1 or more open parentheses left return false else return true
  return openParens.length === 0
};

let s = '()'
console.log(isValid(s))

s = '()[]{}'
console.log(isValid(s))

s = '(]'
console.log(isValid(s))

s = ']'
console.log(isValid(s))

s = ']['
console.log(isValid(s))

s = '()[]{}{}[]()'
console.log(isValid(s))

s = '()[]{}{}[])('
console.log(isValid(s))

s = '({[]})'
console.log(isValid(s))

s = '({][})'
console.log(isValid(s))

s = '({}[]{}([{([{}])}]))'
console.log(isValid(s))