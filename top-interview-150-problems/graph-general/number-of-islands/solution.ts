export {}

function numIslands(grid: string[][]): number {
  let islands = 0

  // recursive
  grid.forEach((row, rowIdx) => {
    row.forEach((ele, colIdx) => {
      if (ele === '1') {
        islands++
        explore(rowIdx, colIdx, grid)
      }
    })
  })

  return islands
}

function explore(x: number, y: number, grid: string[][]) {
  if (grid[x]?.[y] === '1') {
    grid[x][y] = '0'
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
