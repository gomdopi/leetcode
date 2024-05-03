export {}

function removeElement(nums: number[], val: number): number {
  const n = nums.length
  if (n === 0 || val > 50) return n

  let i = 0 // idx tracking number of elements != val

  for (const n of nums) {
    if (n != val) nums[i++] = n
  }

  return i
}

let nums = [3, 2, 2, 3]
let val = 3
console.log(removeElement(nums, val))

nums = [0, 1, 2, 2, 3, 0, 4, 2]
val = 2
console.log(removeElement(nums, val))

nums = [3, 3]
val = 3
console.log(removeElement(nums, val))
