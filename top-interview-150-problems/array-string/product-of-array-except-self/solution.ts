export {}

function productExceptSelf(nums: number[]): number[] {
  if (nums.length === 2) {
    return [nums[1], nums[0]]
  }

  let prefixProducts: number[] = []
  let suffixProducts: number[] = []

  // pre-compute prefix products
  let prefixProduct: number = 1
  for (let i = 0; i < nums.length; i++) {
    prefixProduct *= nums[i]
    prefixProducts.push(prefixProduct)
  }
  
  // pre-compute suffix products
  let suffixProduct: number = 1
  for (let i = 0; i < nums.length; i++) {
    suffixProduct *= nums[nums.length - 1 - i]
    suffixProducts.push(suffixProduct)
  }
  suffixProducts.reverse()

  // compute products for all except first and last elements
  let answer: number[] = []
  for (let i = 1; i < nums.length - 1; i++) {
    let value = prefixProducts[i - 1] * suffixProducts[i + 1]
    // handle -0
    if (value === -0) {
      value = 0
    }
    answer.push(value)
  }

  // compute product for first element
  let value = suffixProducts[1]
  // handle -0
  if (value === -0) {
    value = 0
  }
  answer.unshift(value)
  // compute product for last element
  // handle -0
  value = prefixProducts[prefixProducts.length - 2]
  if (value === -0) {
    value = 0
  }
  answer.push(value)

  return answer
};

let nums = [1,2,3,4]
console.log(productExceptSelf(nums))

nums = [-1,1,0,-3,3]
console.log(productExceptSelf(nums))

nums = [1,2,3,4,5]
console.log(productExceptSelf(nums))

nums = [4,3,2,1,2]
console.log(productExceptSelf(nums))