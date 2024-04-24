export {}

function candy(ratings: number[]): number {
  let n = ratings.length
  let candies: number[] = new Array(n).fill(1)

  // check candy amounts from left to right
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }

  // check candy amounts from right to left
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1)
    }
  }

  // sum up all the candies given to each child and return
  let totalCandies = 0
  for (let i = 0; i < n; i++) {
    totalCandies += candies[i]
  }

  return totalCandies
}

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