import TreeNode from '../TreeNode'

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false

  // recursive
  if (!root.left && !root.right && root.val === targetSum) return true

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )

  // // iterative
  // let stack: TreeNode[] = []
  // root.val = targetSum - root.val
  // stack.push(root)

  // while (stack.length > 0) {
  //   const node = stack.pop()

  //   if (!node.left && !node.right && node.val === 0) return true

  //   if (node.left) {
  //     node.left.val = node.val - node.left.val
  //     stack.push(node.left)
  //   }

  //   if (node.right) {
  //     node.right.val = node.val - node.right.val
  //     stack.push(node.right)
  //   }
  // }

  // return false
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
