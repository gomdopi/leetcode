import TreeNode from '../TreeNode'

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  // recursive
  const tempL = root.left
  const tempR = root.right
  root.left = invertTree(tempR)
  root.right = invertTree(tempL)

  return root
}

let root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
)
console.log(invertTree(root))

root = new TreeNode(2, new TreeNode(1), new TreeNode(3))
console.log(invertTree(root))

root = new TreeNode()
console.log(invertTree(root))
