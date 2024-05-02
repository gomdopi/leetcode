export {}

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) return

  let i = m // idx tracking nums1
  let j = 0 // idx tracking nums2

  while (i < m + n) {
    nums1[i++] = nums2[j++]
  }

  nums1.sort((a, b) => a - b)
}

let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3
merge(nums1, m, nums2, n)
console.log(nums1)

nums1 = [1]
m = 1
nums2 = []
n = 0
merge(nums1, m, nums2, n)
console.log(nums1)

nums1 = [0]
m = 0
nums2 = [1]
n = 1
merge(nums1, m, nums2, n)
console.log(nums1)
