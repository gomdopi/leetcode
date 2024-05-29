export {}

function numIslands(grid: string[][]): number {
  let islands = 0

  // // recursive
  // grid.forEach((row, rowIdx) => {
  //   row.forEach((ele, colIdx) => {
  //     if (ele === '1') {
  //       islands++
  //       explore(rowIdx, colIdx, grid)
  //     }
  //   })
  // })

  // iterative
  let stack: number[][] = []

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        islands++
        stack.push([i, j])
      }

      while (stack.length > 0) {
        const [x, y] = stack.pop()

        if (grid[x]?.[y] === '1') {
          grid[x][y] = '2' // mark as visited
          stack.push([x + 1, y])
          stack.push([x - 1, y])
          stack.push([x, y + 1])
          stack.push([x, y - 1])
        }
      }
    }
  }

  return islands
}

function explore(x: number, y: number, grid: string[][]) {
  if (grid[x]?.[y] === '1') {
    grid[x][y] = '0' // mark as visited
    explore(x + 1, y, grid)
    explore(x - 1, y, grid)
    explore(x, y + 1, grid)
    explore(x, y - 1, grid)
  }
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
