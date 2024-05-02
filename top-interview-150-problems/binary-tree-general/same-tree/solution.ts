import TreeNode from '../TreeNode'

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (!p || !q || p.val != q.val) return false

  // recursive
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

let p = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
)
let q = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
)
console.log(isSameTree(p, q))

p = new TreeNode(1, new TreeNode(2, null, null), null)
q = new TreeNode(1, null, new TreeNode(2, null, null))
console.log(isSameTree(p, q))

p = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(1, null, null))
q = new TreeNode(1, new TreeNode(1, null, null), new TreeNode(2, null, null))
console.log(isSameTree(p, q))
