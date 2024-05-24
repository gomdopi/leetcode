export {}

function numIslands(grid: string[][]): number {
  let islands = 0

  // // recursive

  // grid.forEach((row, rowIdx) => {
  //   row.forEach((ele, colIdx) => {
  //     if (ele === '1') {
  //       islands++
  //       explore(grid, rowIdx, colIdx)
  //     }
  //   })
  // })

  // return islands

  // iterative
  const stack: number[][] = []
  const m: number = grid.length
  const n: number = grid[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') continue

      islands++
      stack.push([i, j])

      while (stack.length > 0) {
        const [i, j] = stack.pop()
        if (grid[i][j] !== '1') continue

        grid[i][j] = '2' // marking cell as visited

        grid[i + 1] && grid[i + 1][j] === '1' && stack.push([i + 1, j])
        grid[i - 1] && grid[i - 1][j] === '1' && stack.push([i - 1, j])
        grid[i] && grid[i][j + 1] === '1' && stack.push([i, j + 1])
        grid[i] && grid[i][j - 1] === '1' && stack.push([i, j - 1])
      }
    }
  }

  return islands
}

function explore(grid: string[][], rowIdx: number, colIdx: number): void {
  if (grid[rowIdx]?.[colIdx] !== '1') {
    return
  }
  grid[rowIdx][colIdx] = '0'
  explore(grid, rowIdx + 1, colIdx)
  explore(grid, rowIdx - 1, colIdx)
  explore(grid, rowIdx, colIdx + 1)
  explore(grid, rowIdx, colIdx - 1)
}

let grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]
console.log(numIslands(grid))

grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
]
console.log(numIslands(grid))
