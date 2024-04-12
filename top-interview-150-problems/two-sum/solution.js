/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  throw new Error('No answer');
};

// My initial solution (brute force)

// var twoSum = function(nums, target) {
//   var answer = [];
//   for(var i = 0; i < nums.length; i++) {
//     for (var j = i; j < nums.length; j++) {
//       if (i === j) {
//         continue;
//       }else if (nums[i] + nums[j] === target) {
//         answer.push(i);
//         answer.push(j);
//       }
//     }
//   }
//
//   return answer;
// };

// var output = twoSum([3,2,4], 6);
var output = twoSum([2,7,11,15], 9);
// var output = twoSum([3,3], 6);

console.log(output);
