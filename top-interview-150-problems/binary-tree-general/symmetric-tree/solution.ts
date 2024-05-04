import TreeNode from '../TreeNode'

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  // // recursive
  // return isMirror(root.left, root.right)

  // iterative
  let stack = [root.left, root.right]

  while (stack.length > 0) {
    const rightNode = stack.pop()
    const leftNode = stack.pop()

    if (!leftNode && !rightNode) continue
    if (!leftNode || !rightNode || leftNode.val != rightNode.val) return false

    stack.push(leftNode.left)
    stack.push(rightNode.right)
    stack.push(leftNode.right)
    stack.push(rightNode.left)
  }

  return true
}

function isMirror(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (!p || !q || p.val != q.val) return false

  return isMirror(p.left, q.right) && isMirror(p.right, q.left)
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

root = new TreeNode(1, new TreeNode(0))
console.log(isSymmetric(root))
