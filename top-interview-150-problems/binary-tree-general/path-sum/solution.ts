import TreeNode from '../TreeNode'

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false

  // recursive
  return helper(root, targetSum, root.val)

  // iterative
}

function helper(
  root: TreeNode | null,
  targetSum: number,
  currentSum: number
): boolean {
  if (!root.left && !root.right) {
    if (currentSum === targetSum) {
      return true
    } else {
      return false
    }
  }

  if (root.left && root.right) {
    return (
      helper(root.left, targetSum, currentSum + root.left.val) ||
      helper(root.right, targetSum, currentSum + root.right.val)
    )
  } else if (root.left) {
    return helper(root.left, targetSum, currentSum + root.left.val)
  } else {
    return helper(root.right, targetSum, currentSum + root.right.val)
  }
}

let root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)
let targetSum = 22
console.log(hasPathSum(root, targetSum))

root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
targetSum = 5
console.log(hasPathSum(root, targetSum))

root = null
targetSum = 0
console.log(hasPathSum(root, targetSum))

root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
targetSum = 3
console.log(hasPathSum(root, targetSum))

root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
targetSum = 4
console.log(hasPathSum(root, targetSum))

root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)
targetSum = 26
console.log(hasPathSum(root, targetSum))

root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)
targetSum = 27
console.log(hasPathSum(root, targetSum))

root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)
targetSum = 18
console.log(hasPathSum(root, targetSum))

root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)
targetSum = 25
console.log(hasPathSum(root, targetSum))

root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)
targetSum = 29
console.log(hasPathSum(root, targetSum))

root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)
targetSum = 19
console.log(hasPathSum(root, targetSum))
