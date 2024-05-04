export {}

function removeDuplicates(nums: number[]): number {
  let i = 0 // idx tracking last unique number
  let j = 1 // idx tracking nums

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++
    } else {
      nums[++i] = nums[j++]
    }
  }

  return i + 1
}

let nums = [1, 2]

console.log(removeDuplicates(nums))
console.log(nums)

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

console.log(removeDuplicates(nums))
console.log(nums)
