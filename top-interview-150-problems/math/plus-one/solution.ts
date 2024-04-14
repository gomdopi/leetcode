function plusOne(digits: number[]): number[] {
  // increment last digit of "digits" by 1
  let i = digits.length - 1
  let digit = digits[i] + 1

  // while addition results in "10" repeat with digit in i-1 position
  while (digit === 10) {
    digits[i] = 0
    // if the very first digit is 9 and is incremented then adjust array accordingly
    if (i === 0) {
      digits.unshift(1)
      return digits
    }
    else {
      digit = digits[--i] + 1
    }
  }
  // replace digit at i position with incremented value
  digits[i] = digit

  return digits
};

let digits = [1,2,3]
console.log(plusOne(digits))

digits = [4,3,2,1]
console.log(plusOne(digits))

digits = [9]
console.log(plusOne(digits))