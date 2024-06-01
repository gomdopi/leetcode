export {}

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const m = board.length
  const n = board[0].length

  // recursive
  function explore(x: number, y: number): void {
    if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'O') return

    board[x][y] = 'U'
    explore(x + 1, y)
    explore(x - 1, y)
    explore(x, y + 1)
    explore(x, y - 1)
  }

  // only need to find 'O's on the border since only they can be not surrounded
  // top
  for (let i = 0; i < n; i++) {
    if (board[0][i] === 'O') explore(0, i)
  }
  // bot
  for (let i = 0; i < n; i++) {
    if (board[m - 1][i] === 'O') explore(m - 1, i)
  }
  // don't need to check corners since they were checked already above
  // left
  for (let i = 1; i < m - 1; i++) {
    if (board[i][0] === 'O') explore(i, 0)
  }
  // right
  for (let i = 1; i < m - 1; i++) {
    if (board[i][n - 1] === 'O') explore(i, n - 1)
  }

  // we've updated all 'O's that are not surrounded to 'U'
  // so update all remaining 'O's to 'X'
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X'
    }
  }

  // change all 'U's back to 'O'
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'U') board[i][j] = 'O'
    }
  }
}

let board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X']
]
solve(board)
console.table(board)

board = [
  ['O', 'X', 'X', 'O', 'X'],
  ['X', 'O', 'O', 'X', 'O'],
  ['X', 'O', 'X', 'O', 'X'],
  ['O', 'X', 'O', 'O', 'O'],
  ['X', 'X', 'O', 'X', 'O']
]
solve(board)
console.table(board)

board = [
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X']
]
solve(board)
console.table(board)

board = [
  ['O', 'X', 'O', 'X', 'O', 'X', 'O'],
  ['O', 'X', 'O', 'O', 'X', 'O', 'O'],
  ['X', 'O', 'O', 'X', 'X', 'X', 'O'],
  ['X', 'X', 'O', 'O', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'O', 'O', 'O', 'O'],
  ['X', 'O', 'O', 'X', 'X', 'X', 'X'],
  ['X', 'X', 'O', 'X', 'O', 'X', 'O']
]
solve(board)
console.table(board)
