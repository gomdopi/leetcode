export {}

function candy(ratings: number[]): number {
  let n = ratings.length

  if (n === 1) return 1

  // initialize count of candies given
  let candies: number[] = new Array(n).fill(1)
  
  // iterate from second to last element
  for (let i = 1; i < n; i++) {
    // if left neighbor is lower give 1 candy more than how much neighbor has
    if (ratings[i - 1] < ratings [i]) {
      candies[i] = candies[i - 1] + 1
    }
    // else if left neighbor is greater or equal give 1 candy
    else if (ratings[i - 1] >= ratings [i]) {
      candies[i] = 1
      
      // if left neighbor is greater adjust accordingly
      if (ratings[i - 1] > ratings [i]) {
        let currentIndex = i
        while (currentIndex > 0 && ratings[currentIndex - 1] > ratings[currentIndex] && candies[currentIndex - 1] <= candies[currentIndex]) {
          candies[currentIndex - 1]++
          currentIndex--
        }
      }
    }
  }

  // give out correct candy amount to first child
  if (ratings[0] <= ratings[1]) {
    candies[0] = 1
  } else {
    candies[0] = candies [1] + 1
  }

  let candyCount = 0
  for (let i = 0; i < candies.length; i++) {
    candyCount += candies[i]
  }

  console.log(candies)
  return candyCount
};

let ratings = [1,0,2]
console.log(candy(ratings))

ratings = [1,2,2]
console.log(candy(ratings))

ratings = [1]
console.log(candy(ratings))

ratings = [0]
console.log(candy(ratings))

ratings = [1000]
console.log(candy(ratings))

ratings = [0,1,2,3,4,5,6,7]
console.log(candy(ratings))

ratings = [7,6,5,4,3,2,1,0]
console.log(candy(ratings))

ratings = [1,1]
console.log(candy(ratings))

ratings = [1,2]
console.log(candy(ratings))

ratings = [2,1]
console.log(candy(ratings))

ratings = [1,3,2,2,1]
console.log(candy(ratings))