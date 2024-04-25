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
  let total = 0

  // iterate char by char from the back
  for (let i = s.length - 1; i >= 0; i--) {
    let currentValue = getIntegerValueOfRomanNumeral(s[i] as RomanNumeral)
    // if previous char was of a higher value
    if (getIntegerValueOfRomanNumeral(s[i + 1] as RomanNumeral) > currentValue) {
      // subtract from running total
      total -= currentValue
    }
    // else add to running total
    else {
      total += currentValue
    }
  }

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