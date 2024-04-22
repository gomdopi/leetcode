export {}

function canCompleteCircuit(gas: number[], cost: number[]): number {
  // initialize variables to track total gas, current gas, and starting station
  let totalGas = 0, currentGas = 0, startingStation = 0

  // iterate through each station and keep track of above variables
  for (let i = 0; i < gas.length; i++) {
    // update gas amounts
    totalGas += gas[i] - cost[i]
    currentGas += gas[i] - cost[i]

    // if the amount of current gas we have is ever below 0 it is impossible route
    if (currentGas < 0) {
      // reset relevant variables
      currentGas = 0
      // we know the current station is where route was deemed impossible
      // so set starting station to next station and continue evaluation 
      startingStation = i + 1
    }
  }

  // if total gas is >= 0 circuit is possible, else circuit impossible
  return totalGas >= 0 ? startingStation : -1
};

let gas = [1,2,3,4,5]
let cost = [3,4,5,1,2]
console.log(canCompleteCircuit(gas, cost))

gas = [2,3,4]
cost = [3,4,3]
console.log(canCompleteCircuit(gas, cost))

gas = [5,1,2,3,4]
cost = [4,4,1,5,1]
console.log(canCompleteCircuit(gas, cost))

gas = [4]
cost = [5]
console.log(canCompleteCircuit(gas, cost))