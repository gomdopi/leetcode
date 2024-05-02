export {}

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) return

  let i = m - 1 // idx tracking nums1 valid positions
  let j = n - 1 // idx tracking nums2
  let k = m + n - 1 //idx tracking nums1

  // start from end of both arrays and go until both arrays reach their respective starts
  while (i >= 0 || j >= 0) {
    // if no numbers left to sort in nums1
    if (i < 0) {
      // add remaining nums2 into nums1 starting from k
      while (j >= 0) {
        nums1[k--] = nums2[j--]
        // if we just sorted first of nums2; return
        if (j === -1) return
      }
    }
    // else if no numbers left to sort in nums2
    else if (j < 0) {
      // return since nums1 is already sorted
      return
    }
    // else put relevant nums in their respective positions
    else {
      // if nums1Num > nums2Num; move nums1Num to kth position of nums1; update k and i
      if (nums1[i] > nums2[j]) {
        nums1[k--] = nums1[i--]
      }
      // else nums2Num >= nums1Num; move nums2Num to kth position of nums1; update k and j
      else {
        nums1[k--] = nums2[j--]
      }
    }
  }
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
