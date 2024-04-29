export {}

function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) return s

  // need vars to keep track of what row we are on, what step to take, and the array that holds the string
  let row = 0
  let step = 1
  const convertedStringArr: string[] = new Array(numRows).fill('')

  // iterate through the string
  for (const c of s) {
    // and add the chars in zigzag order
    convertedStringArr[row] += c
    // update the row we are on
    row += step

    // if we are at the top
    if (row === 0) {
      // update step to start going down the rows
      step = 1
    }
    // if we are at the bottom
    else if (row === numRows - 1) {
      // update step to start going up the rows
      step = -1
    }
  }

  // join converted string array and return the converted string
  return convertedStringArr.join('')
}

let s = 'PAYPALISHIRINGA'
let numRows = 3
console.log(convert(s, numRows))

s = 'PAYPALISHIRING'
numRows = 4
console.log(convert(s, numRows))

s = 'A'
numRows = 1
console.log(convert(s, numRows))

s = 'PAYPALISHIRING'
numRows = 1
console.log(convert(s, numRows))

s = 'PAYPALISHIRING'
numRows = 14
console.log(convert(s, numRows))
