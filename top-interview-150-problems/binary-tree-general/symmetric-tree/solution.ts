import TreeNode from '../TreeNode'

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  // // recursive
  // return isMirror(root.left, root.right)

  // iterative
  if (!root.left && !root.right) return true
  else if (!root.left || !root.right) return false

  let stack = [root.left, root.right]

  while (stack.length > 0) {
    const right = stack.pop()
    const left = stack.pop()

    if (left.val != right.val) return false

    if (left.left && right.right) {
      stack.push(left.left)
      stack.push(right.right)
    } else if (!left.left && !right.right) {
    } else {
      return false
    }

    if (left.right && right.left) {
      stack.push(left.right)
      stack.push(right.left)
    } else if (!left.right && !right.left) {
    } else {
      return false
    }
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
