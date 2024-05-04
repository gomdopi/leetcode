export {}

function removeDuplicates(nums: number[]): number {
  let i = 0 // idx tracking last unique number
  let j = 1 // idx tracking nums
  let numSeen = false

  // iterate through nums and replace value at "i" with value at "j" when a diff number encountered
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      if (!numSeen) {
        nums[++i] = nums[j]
        numSeen = true
      }
      j++
    } else {
      nums[++i] = nums[j++]
      numSeen = false
    }
  }

  return i + 1
}

let nums = [-1, -1, -1, 0, 1, 1, 1, 1, 2, 2, 2]

console.log(removeDuplicates(nums))
console.log(nums)

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]

console.log(removeDuplicates(nums))
console.log(nums)

nums = [1, 1, 1, 2, 2, 3]

console.log(removeDuplicates(nums))
console.log(nums)

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4]

console.log(removeDuplicates(nums))
console.log(nums)
