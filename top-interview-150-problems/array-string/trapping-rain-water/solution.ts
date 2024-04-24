export {}

function trap(height: number[]): number {
  const n = height.length
  if (n <= 2) return 0
  
  let left = 0
  let right = n - 1
  let maxHeightLeft = height[left]
  let maxHeightRight = height[right]
  let rain = 0

  while (left < right) {
    if (maxHeightLeft < maxHeightRight) {
      left++
      if (height[left] < maxHeightLeft) {
        rain += maxHeightLeft - height[left]
      } else {
        maxHeightLeft = height[left]
      }
    } else {
      right--
      if (height[right] < maxHeightRight) {
        rain += maxHeightRight - height[right]
      } else {
        maxHeightRight = height[right]
      }
    }
  }

  return rain
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))

height = [4,2,0,3,2,5]
console.log(trap(height))