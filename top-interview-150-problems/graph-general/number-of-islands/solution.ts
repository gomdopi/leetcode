export {}

function numIslands(grid: string[][]): number {
  let islands = 0

  grid.forEach((row, rowIdx) => {
    row.forEach((ele, colIdx) => {
      if (ele === '1') {
        islands++
        explore(grid, rowIdx, colIdx)
      }
    })
  })

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
