import TreeNode from '../TreeNode'

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || p === root || q === root) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  return left && right ? root : left || right
}

let p = new TreeNode(
  5,
  new TreeNode(6),
  new TreeNode(2, new TreeNode(7), new TreeNode(4))
)
let q = new TreeNode(1, new TreeNode(0), new TreeNode(8))
let root = new TreeNode(3, p, q)
console.log(lowestCommonAncestor(root, p, q))
