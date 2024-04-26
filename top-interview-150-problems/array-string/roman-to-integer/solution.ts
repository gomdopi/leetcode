export {}

const romanIntegerMap: Record<string, number> = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

function romanToInt(s: string): number {
  let total = 0

  for (let i = s.length - 2; i >= 0; i--) {
    let currentValue = romanIntegerMap[s[i]]

    if (currentValue < romanIntegerMap[s[i + 1]]) {
      total -= currentValue
    } else {
      total += currentValue
    }
  }

  total += romanIntegerMap[s[s.length - 1]]

  return total
};

// use map and reduce
// function romanToInt(s: string): number {
//   const numbers: number[] = s.split('').map(c => romanIntegerMap[c])
//   return numbers.reduce((sum, val, index) => val < numbers[index + 1] ? sum - val : sum + val, 0)
// };

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