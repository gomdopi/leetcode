import TreeNode from '../TreeNode'

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  // // recursive
  // const tempL = root.left
  // const tempR = root.right
  // root.left = invertTree(tempR)
  // root.right = invertTree(tempL)

  // return root

  // iterative
  let stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()

    // if (!node || (!node.left && !node.right) || (node.left.val === node.right.val)) continue

    if (!node) continue

    const tempL = node.left
    const tempR = node.right
    node.left = tempR
    node.right = tempL
    if (tempL) stack.push(tempL)
    if (tempR) stack.push(tempR)
  }

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
