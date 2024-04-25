export {}

type RomanNumeral = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

function getIntegerValueOfRomanNumeral(c: RomanNumeral): number {
  switch(c) {
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    case 'M':
      return 1000
  }
}

function romanToInt(s: string): number {
  if (s.length === 1) {
    return getIntegerValueOfRomanNumeral(s[0] as RomanNumeral)
  }

  let total = 0

  // iterate char by char
  for (let i = 0; i < s.length;) {
    let currValue = 0

    // if last char then return its integer value
    console.log(i)
    console.log(s.length - 1)
    if (i === s.length - 1) {
      currValue = getIntegerValueOfRomanNumeral(s[i++] as RomanNumeral)
    }
    // else if next char is same
    else if (s[i] === s[i + 1]) {
      let count = 2

      // then count repetition
      while (s[i] === s[i + count] && count < 3) { // can have a max of 4 repetitions
        count++
      }

      // and compute integer value
      currValue = getIntegerValueOfRomanNumeral(s[i] as RomanNumeral) * count

      // and set index to i + count
      i += count
    }
    // else if next char is higher value char
    else if (getIntegerValueOfRomanNumeral(s[i] as RomanNumeral) < getIntegerValueOfRomanNumeral(s[i + 1] as RomanNumeral)) {
      // then compute integer value of combination of both chars
      currValue = getIntegerValueOfRomanNumeral(s[i + 1] as RomanNumeral) - getIntegerValueOfRomanNumeral(s[i] as RomanNumeral)

      // and set index to i + 2
      i += 2
    }
    // else if next char is lower value char
    else if (getIntegerValueOfRomanNumeral(s[i] as RomanNumeral) > getIntegerValueOfRomanNumeral(s[i + 1] as RomanNumeral)) {
      // then compute integer value of current char and set index to i + 1
      currValue = getIntegerValueOfRomanNumeral(s[i++] as RomanNumeral)
    }

    // add computed integer value to running total
    total += currValue
  }
    
  // return total
  return total
};

let s = 'I'
console.log(romanToInt(s))

s = 'V'
console.log(romanToInt(s))

s = 'X'
console.log(romanToInt(s))

s = 'L'
console.log(romanToInt(s))

s = 'C'
console.log(romanToInt(s))

s = 'D'
console.log(romanToInt(s))

s = 'M'
console.log(romanToInt(s))

s = 'III'
console.log(romanToInt(s))

s = 'LVIII'
console.log(romanToInt(s))

s = 'MCMXCIV'
console.log(romanToInt(s))

s = 'MCMXCIII'
console.log(romanToInt(s))

s = 'MMM'
console.log(romanToInt(s))

s = 'CD'
console.log(romanToInt(s))

s = 'DCXXI'
console.log(romanToInt(s))