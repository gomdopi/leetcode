import TreeNode from '../../../classes/TreeNode'

function flatten(root: TreeNode | null): void {
  if (!root) return

  // // recursive
  // helper(root)

  // iterative
  let curr = root

  while (curr) {
    if (curr.left) {
      let temp = curr.left
      while (temp.right) {
        temp = temp.right
      }
      temp.right = curr.right
      curr.right = curr.left
      curr.left = null
      curr = curr.right
    } else {
      curr = curr.right
    }
  }
}

function helper(node: TreeNode | null): TreeNode {
  if (!node.left && !node.right) return node

  let temp = node.right

  if (node.left) {
    let l = helper(node.left)
    node.right = node.left
    node.left = null
    if (temp) {
      l.right = temp
      return helper(temp)
    } else {
      return l
    }
  } else {
    return helper(temp)
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
