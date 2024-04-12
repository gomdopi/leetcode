export {}

function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) return 1
  
  let i = nums.length - 1

  let mostRecentUniqueNum = nums[i]

  for (i; i > 0; i--) { // iterate over each element in nums
    if (nums[i - 1] === mostRecentUniqueNum) {  // if duplicate
      nums.splice(i - 1, 1)  // remove duplicate
    } else {  // if not duplicate
      mostRecentUniqueNum = nums[i - 1] // update most recent unique number
    }
  }

  return nums.length
};

let nums = [1,2]

console.dir(removeDuplicates(nums))