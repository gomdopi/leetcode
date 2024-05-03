export {}

function removeElement(nums: number[], val: number): number {
  const n = nums.length
  if (n === 0 || val > 50) return n

  let i = 0 // idx tracking nums from start
  let j = n - 1 // idx tracking nums from end

  // while there are numbers that haven't been checked
  while (i <= j) {
    if (i === j) {
      // if current num equals val don't count it; else count it
      return nums[i] === val ? i : i + 1
    }
    // if current number = val then swap with the first number closest to the end != val
    if (nums[i] === val) {
      while (j > i && nums[j] === val) {
        j--
        // if j = i we're done
        if (j === i) {
          return i
        }
      }
      nums[i++] = nums[j]
      nums[j--] = val
    }
    // else just increment i
    else {
      i++
    }
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
