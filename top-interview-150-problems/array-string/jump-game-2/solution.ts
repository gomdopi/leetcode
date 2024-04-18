export {}

function jump(nums: number[]): number {
  if (nums.length == 1) return 0

  let jumps = 0
  let lastJump = nums.length - 1
  // start from the end and find the "best" previous jump 
  while (lastJump > 0) {
    // "best" previous jump index would be index closest to 0 that can make it to current index
    let i = 0
    while (i < lastJump) {
      if (i + nums[i] >= lastJump) {
        jumps++
        lastJump = i
      } else {
        i++
      }
    }
  }

  return jumps
};

let nums = [2,3,1,1,4]
console.log(jump(nums))

nums = [2,3,0,1,4]
console.log(jump(nums))

nums = [2,3,0,1,4]
console.log(jump(nums))

nums = [4,3,0,1,4]
console.log(jump(nums))

nums = [1,1,1,1,4]
console.log(jump(nums))

nums = [4,1,1,1,0]
console.log(jump(nums))

nums = [1,18,1,1,14,1,1,1,1,1,8,1,1,5,1,1,1,1,1,7,5,1,1,1,1,1,5,1,1,1,1,0]
console.log(jump(nums))