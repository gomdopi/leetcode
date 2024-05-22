import TreeNode from '../TreeNode'

function countNodes(root: TreeNode | null): number {
  if (!root) return 0

  let stack = [root]
  let count = 0

  while (stack.length > 0) {
    count++
    const node = stack.pop()

    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }

  return count
}

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6))
)
console.log(countNodes(root))
