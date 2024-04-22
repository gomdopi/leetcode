export {}

function canCompleteCircuit(gas: number[], cost: number[]): number {// check each index for valid starting position
  let totalGas = 0
  let currentGas = 0
  let currentStation = 0

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i]
    currentGas += gas[i] - cost[i]

    if (currentGas < 0) {
      currentGas = 0
      currentStation = i + 1
    }
  }

  return totalGas >= 0 ? currentStation : -1
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