export {}

function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) return s

  let row = 0
  let step = 1
  let converted: string[] = new Array(numRows).fill('')

  for (let i = 0; i < s.length; i++) {
    // add character to its correct row
    converted[row] += s[i]

    // take a step up/down to next row
    row += step

    // if we have reached the top row set step to +1
    if (row === 0) {
      step = 1
    }
    // if we have reached the bottom row set step to -1
    else if (row === numRows - 1) {
      step = -1
    }
  }

  return converted.join('')
};

let s = "PAYPALISHIRING"
let numRows = 3
console.log(convert(s, numRows))

s = "PAYPALISHIRING"
numRows = 4
console.log(convert(s, numRows))

s = "A"
numRows = 1
console.log(convert(s, numRows))

s = "PAYPALISHIRING"
numRows = 1
console.log(convert(s, numRows))

s = "PAYPALISHIRING"
numRows = 14
console.log(convert(s, numRows))