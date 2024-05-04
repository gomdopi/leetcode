import TreeNode from '../TreeNode'

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  // // recursive
  // return isMirror(root.left, root.right)

  // iterative
  let leftStack = [root.left]
  let rightStack = [root.right]

  while (leftStack.length > 0 || rightStack.length > 0) {
    const leftNode = leftStack.pop()
    const rightNode = rightStack.pop()

    if (leftNode && rightNode) {
      if (leftNode.val != rightNode.val) return false

      if (leftNode.left && rightNode.right) {
        leftStack.push(leftNode.left)
        rightStack.push(rightNode.right)
      } else if (!leftNode.left && !rightNode.right) {
      } else {
        return false
      }

      if (leftNode.right && rightNode.left) {
        leftStack.push(leftNode.right)
        rightStack.push(rightNode.left)
      } else if (!leftNode.right && !rightNode.left) {
      } else {
        return false
      }
    } else if (!leftNode && !rightNode) {
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
