export {}

function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) return 1
  
  let i = 1

  let mostRecentUniqueNum = nums[0]
  let duplicateEncountered = false

  for (let j = 1; j < nums.length;) {
    if (nums[j] === mostRecentUniqueNum) {  // if duplicate
      if (!duplicateEncountered) {  // if first duplicate set duplicateEncountered = true and advance i and j
        duplicateEncountered = true
        nums[i++] = nums[j++]
      } else {  // if second+ duplicate advance j until different number
        while (nums[j] === mostRecentUniqueNum) {
          nums[j++] = mostRecentUniqueNum
        }
      }
    } else {  // set nums[i] = nums[j] and advance i and j and set duplicateEncountered = false
      mostRecentUniqueNum = nums[j++]
      nums[i++] = mostRecentUniqueNum
      duplicateEncountered = false
    }
  }
  
  return i
};

let nums = [-1,-1,-1,0,1,1,1,1,2,2,2]

console.dir(removeDuplicates(nums))