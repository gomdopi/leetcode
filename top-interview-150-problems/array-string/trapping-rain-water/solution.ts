export {}

function trap(height: number[]): number {
  const n = height.length

  let left = 0
  let right = n - 1
  let leftMaxHeight = height[left]
  let rightMaxHeight = height[right]
  let totalRain = 0

  while (left < right) {
    if (leftMaxHeight < rightMaxHeight) {
      left++
      if (height[left] < leftMaxHeight) {
        totalRain += leftMaxHeight - height[left]
      } else {
        leftMaxHeight = height[left]
      }
    } else {
      right--
      if (height[right] < rightMaxHeight) {
        totalRain += rightMaxHeight - height[right]
      } else {
        rightMaxHeight = height[right]
      }
    }
  }

  return totalRain
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))

height = [4,2,0,3,2,5]
console.log(trap(height))

height = [0]
console.log(trap(height))

height = [1]
console.log(trap(height))

height = [1000]
console.log(trap(height))

height = [10,0,0,0,0,0,0,0,0,10]
console.log(trap(height))

height = [2,0,0,0,0,0,0,0,0,10]
console.log(trap(height))

height = [1,0,1,0,1,0,1,0,1]
console.log(trap(height))

height = [0,1,0,1,0,1,0,1]
console.log(trap(height))

height = [1,0,1,0,1,0,1,0]
console.log(trap(height))