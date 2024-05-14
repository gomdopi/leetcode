import TreeNode from '../TreeNode'

function flatten(root: TreeNode | null): void {
  if (!root) return

  // recursive

  // iterative
  let curr = root

  while (curr) {
    if (curr.left) {
      let t = curr.left
      while (t.right) {
        t = t.right
      }
      t.right = curr.right
      curr.right = curr.left
      curr.left = null
    } else {
      curr = curr.right
    }
  }
}

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(5, null, new TreeNode(6))
)
flatten(root)
console.log(root)

root = null
flatten(root)
console.log(root)

root = new TreeNode(0)
flatten(root)
console.log(root)
