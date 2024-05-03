import TreeNode from '../TreeNode'

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  // // recursive
  // if (!root.left && !root.right) return root
  // const tempL = root.left
  // const tempR = root.right
  // root.left = tempR
  // root.right = tempL
  // invertTree(root.left)
  // invertTree(root.right)

  // return root

  // iterative
  let stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()

    if (!node) continue
    if (!node.left && !node.right) continue

    const tempL = node.left
    const tempR = node.right

    node.left = tempR
    node.right = tempL

    stack.push(node.left)
    stack.push(node.right)
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
