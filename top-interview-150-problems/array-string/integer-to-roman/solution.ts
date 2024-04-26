export {}

const integerRomanMap: Record<number, string> = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
}

// initial self solution
// function intToRoman(num: number): string {
//   let roman = ''  
//   let remainder = num

//   while (remainder >= 1000) {
//     roman += integerRomanMap[1000]
//     remainder -= 1000
//   }

//   if (remainder >= 900) {
//     roman += integerRomanMap[100] + integerRomanMap[1000]
//     remainder -= 900
//   } else if (remainder >= 500) {
//     roman += integerRomanMap[500]
//     remainder -= 500
//   } else if (remainder >= 400) {
//     roman += integerRomanMap[100] + integerRomanMap[500]
//     remainder -= 400
//   }

//   while (remainder >= 100) {
//     roman += integerRomanMap[100]
//     remainder -= 100
//   }

//   if (remainder >= 90) {
//     roman += integerRomanMap[10] + integerRomanMap[100]
//     remainder -= 90
//   } else if (remainder >= 50) {
//     roman += integerRomanMap[50]
//     remainder -= 50
//   } else if (remainder >= 40) {
//     roman += integerRomanMap[10] + integerRomanMap[50]
//     remainder -= 40
//   }
  
//   while (remainder >= 10) {
//     roman += integerRomanMap[10]
//     remainder -= 10
//   }

//   if (remainder >= 9) {
//     roman += integerRomanMap[1] + integerRomanMap[10]
//     remainder -= 9
//   } else if (remainder >= 5) {
//     roman += integerRomanMap[5]
//     remainder -= 5
//   } else if (remainder >= 4) {
//     roman += integerRomanMap[1] + integerRomanMap[5]
//     remainder -= 4
//   }

//   while (remainder >= 1) {
//     roman += integerRomanMap[1]
//     remainder--
//   }

//   return roman
// };

function intToRoman(num: number): string {
  const ones = ['','I','II','III','IV','V','VI','VII','VIII','IX']
  const tens = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
  const hundreds = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
  const thousands = ['','M','MM','MMM']

  const thousandsDigit = Math.floor(num / 1000)
  const hundredsDigit = Math.floor(num / 100) % 10
  const tensDigit = Math.floor(num / 10) % 10
  const onesDigit = num % 10

  return thousands[thousandsDigit] + hundreds[hundredsDigit] + tens[tensDigit] + ones[onesDigit]
}

let num = 3
console.log(intToRoman(num))

num = 58
console.log(intToRoman(num))

num = 1994
console.log(intToRoman(num))

num = 1
console.log(intToRoman(num))

num = 5
console.log(intToRoman(num))

num = 10
console.log(intToRoman(num))

num = 50
console.log(intToRoman(num))

num = 100
console.log(intToRoman(num))

num = 500
console.log(intToRoman(num))

num = 1000
console.log(intToRoman(num))

num = 4
console.log(intToRoman(num))

num = 7
console.log(intToRoman(num))

num = 9
console.log(intToRoman(num))

num = 14
console.log(intToRoman(num))

num = 40
console.log(intToRoman(num))

num = 44
console.log(intToRoman(num))

num = 90
console.log(intToRoman(num))

num = 99
console.log(intToRoman(num))

num = 400
console.log(intToRoman(num))

num = 444
console.log(intToRoman(num))

num = 900
console.log(intToRoman(num))

num = 999
console.log(intToRoman(num))