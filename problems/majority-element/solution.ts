export {}

// Map
function majorityElement(nums: number[]): any {
  if (nums.length === 1) return nums[0]

  let requirementForMajority = Math.floor(nums.length/2) + 1

  let map = new Map()

  for (let n of nums) {
    let value = map.get(n)
    let currentCount = value === undefined ? 0 : value
    map.set(n, ++currentCount)
  }

  for (let v of map) {
    if (v[1] >= requirementForMajority) {
      return v[0]
    }
  }
};

// Boyer-Moore Voting algorithm
function majorityElementBMVA(nums: number[]): number {
  let i = 1;
  let element = nums[0];
  let count = 1;
  while (i < nums.length) {
      if (nums[i] !== element) {
          count--;
      } else {
          count++;
      }
      if (count < 0) {
          element = nums[i];
          count = 0;
      }
      i++;
  }
  return element;
}

let nums = [2,2,2,2,3,5,7,2,2,3,4,6,3,3465,457,45678,243,2134,1,2,2,2,2,2,2,2,2]

console.log(majorityElement(nums))