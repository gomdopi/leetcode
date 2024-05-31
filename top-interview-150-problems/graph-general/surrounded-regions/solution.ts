export {}

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const m = board.length
  const n = board[0].length

  // // recursive
  // function capture(row: number, col: number): void {
  //   if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] !== 'O')
  //     return

  //   board[row][col] = 'U'
  //   capture(row + 1, col)
  //   capture(row - 1, col)
  //   capture(row, col + 1)
  //   capture(row, col - 1)
  // }

  // // just check border for 'O's, capture will deal with all connected 'O's
  // // top
  // for (let i = 0; i < n; i++) {
  //   if (board[0][i] !== 'O') continue

  //   capture(0, i)
  // }
  // // bot
  // for (let i = 0; i < n; i++) {
  //   if (board[m - 1][i] !== 'O') continue

  //   capture(m - 1, i)
  // }
  // // left
  // for (let i = 0; i < m; i++) {
  //   if (board[i][0] !== 'O') continue

  //   capture(i, 0)
  // }
  // // right
  // for (let i = 0; i < m; i++) {
  //   if (board[i][n - 1] !== 'O') continue

  //   capture(i, n - 1)
  // }

  // // update all 'O's to 'X'
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (board[i][j] !== 'O') continue

  //     board[i][j] = 'X'
  //   }
  // }

  // // update all 'U's back to 'O'
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (board[i][j] !== 'U') continue

  //     board[i][j] = 'O'
  //   }
  // }

  // iterative
  let stack: number[][] = []

  // find all 'O's on the border and update to 'U'
  // top
  for (let i = 0; i < n; i++) {
    if (board[0][i] !== 'O') continue

    stack.push([0, i])
  }
  // bot
  for (let i = 0; i < n; i++) {
    if (board[m - 1][i] !== 'O') continue

    stack.push([m - 1, i])
  }
  // left
  for (let i = 0; i < m; i++) {
    if (board[i][0] !== 'O') continue

    stack.push([i, 0])
  }
  // right
  for (let i = 0; i < m; i++) {
    if (board[i][n - 1] !== 'O') continue

    stack.push([i, n - 1])
  }

  let queue: number[][] = []

  // find 'O's connected to border 'O's and update border 'O's
  while (stack.length > 0) {
    const [x, y] = stack.pop()

    if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'O') continue

    board[x][y] = 'U'
    stack.push([x + 1, y])
    stack.push([x - 1, y])
    stack.push([x, y + 1])
    stack.push([x, y - 1])
    queue.push([x + 1, y])
    queue.push([x - 1, y])
    queue.push([x, y + 1])
    queue.push([x, y - 1])
  }

  // update all 'O's connected to border 'O's to 'U'
  while (queue.length > 0) {
    const [x, y] = queue.shift()

    if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'O') continue

    board[x][y] = 'U'
  }

  // update all 'O's to 'X'
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== 'O') continue

      board[i][j] = 'X'
    }
  }

  // update all 'U's back to 'O'
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== 'U') continue

      board[i][j] = 'O'
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
