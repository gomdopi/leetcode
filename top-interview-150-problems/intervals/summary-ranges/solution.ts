export {}

function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return []

  let ranges: string[] = []

  // iterate through each num in nums one by one
  let range = nums[0].toString()
  for (let i = 1; i < nums.length; i++) {
    // if next number is greater by only one continue current range
    if (nums[i] - nums[i - 1] === 1) continue

    // if next number is greater by more than one the current range is finished
    // if previous num is equal to start num of current range
    if (nums[i - 1].toString() === range) {
      ranges.push(range)
    } else {
      range = range.concat(`->${nums[i - 1].toString()}`)
      ranges.push(range)
    }
    // start new range with most recent num
    range = nums[i].toString()
  }

  // if last number is inside most recent range then close range with lastNum and push to ranges
  let lastNum = nums[nums.length - 1]
  if (lastNum - nums[nums.length - 2] === 1) {
    range = range.concat(`->${lastNum.toString()}`)
    ranges.push(range)
  }
  // if last number is outside of most recent range then add just lastNum
  else {
    ranges.push(lastNum.toString())
  }

  return ranges
};

let nums = [0,1,2,4,5,7]
console.log(summaryRanges(nums))

nums = [0,2,3,4,6,8,9]
console.log(summaryRanges(nums))

nums = [-6,-5,-4,-2,-1,1,2,4,5,7]
console.log(summaryRanges(nums))