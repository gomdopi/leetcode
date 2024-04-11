export {}

/**
 Do not return anything, modify nums in-place instead.
*/
function rotate(nums: number[], k: number): void {
  if (k === 0 || nums.length === 1) return

  if (k > nums.length) k = k % nums.length

  let temp: number[] = []
  
  temp = nums.splice(nums.length - k, k)

  nums.unshift(...temp)
};

let nums = [1,2,3,4,5,6,7]
let k = 3
rotate(nums, k)
console.dir(nums)

nums = [-1,-100,3,99]
k = 2
rotate(nums, k)
console.dir(nums)

nums = [1,2]
k = 3
rotate(nums, k)
console.dir(nums)

nums = [1,2]
k = 5
rotate(nums, k)
console.dir(nums)

nums = [1,2,3,4,5,6,7]
k = 2
rotate(nums, k)
console.dir(nums)