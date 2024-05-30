export {}

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const m = board.length
  const n = board[0].length

  let checkedCoords: boolean[][] = Array.from({ length: m }, () =>
    Array(n).fill(false)
  )

  // iterative
  // can skip edges since any 'O's on the border is not surrounded by definition
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === 'X' || checkedCoords[i][j]) continue

      // add to "checkedCoords"
      checkedCoords[i][j] = true

      let surrounded = true
      let stack: number[][] = [[i, j]]
      let modStack: number[][] = [[i, j]]

      // find all connecting 'O's
      while (stack.length > 0) {
        const [x, y] = stack.pop()

        // if at border then all connected 'O's are not surrounded
        if (surrounded && (x === 0 || x === m - 1 || y === 0 || y === n - 1)) {
          surrounded = false
        }

        if (board[x + 1]?.[y] === 'O' && !checkedCoords[x + 1][y]) {
          checkedCoords[x + 1][y] = true
          stack.push([x + 1, y])
          modStack.push([x + 1, y])
        }
        if (board[x - 1]?.[y] === 'O' && !checkedCoords[x - 1][y]) {
          checkedCoords[x - 1][y] = true
          stack.push([x - 1, y])
          modStack.push([x - 1, y])
        }
        if (board[x]?.[y + 1] === 'O' && !checkedCoords[x][y + 1]) {
          checkedCoords[x][y + 1] = true
          stack.push([x, y + 1])
          modStack.push([x, y + 1])
        }
        if (board[x]?.[y - 1] === 'O' && !checkedCoords[x][y - 1]) {
          checkedCoords[x][y - 1] = true
          stack.push([x, y - 1])
          modStack.push([x, y - 1])
        }
      }

      // if not surrounded skip updating coords in "modStack"
      if (!surrounded) continue

      // update coords in "modStack"
      while (modStack.length > 0) {
        const [x, y] = modStack.pop()

        board[x][y] = 'X'
      }
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
