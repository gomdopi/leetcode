export {}

function maxProfit(prices: number[]): number {
  if (prices.length == 0) return 0

  let buy = prices[0]
  let maxProfit = 0

  // check each day's price one by one
  for (let i = 0; i < prices.length; i++) {
    // if new price is lower than or equal to previous price
    if (prices[i] <= prices[i - 1]) {
      // then update buy price
      buy = prices[i]
      // check next price
      continue
    }
    // else if new price is greater than previous price
    else if (prices[i] > prices[i - 1]) {
      // take profit
      maxProfit += prices[i] - buy
      buy = prices[i]
      continue
    }
  }

  return maxProfit
};

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))

prices = [1,2,3,4,5]
console.log(maxProfit(prices))

prices = [7,6,4,3,1]
console.log(maxProfit(prices))

prices = [1]
console.log(maxProfit(prices))

prices = [10,6,8,4,2,0]
console.log(maxProfit(prices))

prices = [1,1,2,2,1,1,2,2,1,1]
console.log(maxProfit(prices))

prices = [1,2,3,2,1,2,3,2,1]
console.log(maxProfit(prices))

prices = [1,2,3,9,5,6,7,8,8]
console.log(maxProfit(prices))