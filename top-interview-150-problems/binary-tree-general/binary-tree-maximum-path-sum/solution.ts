import TreeNode from '../TreeNode'

function maxPathSum(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  // recursive
  let maxSum = root.val

  function helper(node: TreeNode | null): number {
    if (!node) return 0

    let l = helper(node.left)
    let r = helper(node.right)
    maxSum = Math.max(maxSum, l + node.val + r)
    return Math.max(0, Math.max(l, r) + node.val)
  }

  helper(root)
  return maxSum
}

let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(maxPathSum(root))

root = new TreeNode(
  -10,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)
console.log(maxPathSum(root))
