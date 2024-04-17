export {}

function twoSum(nums: number[], target: number): number[] {
  // create map tracking complements (value when added to current num would equal target)
  let complements = new Map()
  
  for (let i = 0; i < nums.length; i++) {
    let complementCounterpartIndex = complements.get(nums[i])
    // if complement already mapped
    if (complementCounterpartIndex != undefined) {
      // return indices of the numbers
      return [complementCounterpartIndex, i]
    }

    // else calculate complement
    let complement = target - nums[i]
    // and map it with its counterpart
    complements.set(complement, i)
  }
  return []
};

let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums, target))

nums = [3,2,4]
target = 6
console.log(twoSum(nums, target))

nums = [3,3]
target = 6
console.log(twoSum(nums, target))

nums = [-3,1,2,1,2,1,2,3]
target = 0
console.log(twoSum(nums, target))

nums = [-3,1,2,1,2,1,2,3]
target = -2
console.log(twoSum(nums, target))

nums = [-3,1,2,1,2,1,2,3]
target = -1
console.log(twoSum(nums, target))

nums = [-3,-3]
target = -6
console.log(twoSum(nums, target))