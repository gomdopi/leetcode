export {}

function hIndex(citations: number[]): number {
  if (citations.length === 1 && citations[0] >= 1) return 1

  for (let i = citations.length; i >= 0; i--) {
    let count = 0

    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= i) {
        count++
      }
    }
    if (count >= i) return i
  }

  return 0
};

let citations = [3,0,6,1,5]
console.log(hIndex(citations))

citations = [1,3,1]
console.log(hIndex(citations))

citations = [3,3,3]
console.log(hIndex(citations))

citations = [2,3,1]
console.log(hIndex(citations))

citations = [4,3,2]
console.log(hIndex(citations))

citations = [8,8,8,8,8,8,8,8]
console.log(hIndex(citations))

citations = [8,8,8,8,8,8,8]
console.log(hIndex(citations))

citations = [0,8,8,8,8,8,8]
console.log(hIndex(citations))

citations = [0]
console.log(hIndex(citations))