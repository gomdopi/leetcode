import TreeNode from '../TreeNode'

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  // recursive
  return isSameTree(root.left, invertTree(root.right))
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root

  const tempL = root.left
  const tempR = root.right
  root.left = tempR
  root.right = tempL
  invertTree(root.left)
  invertTree(root.right)

  return root
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (!p || !q || p.val != q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
)
console.log(isSymmetric(root))

root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
)
console.log(isSymmetric(root))
