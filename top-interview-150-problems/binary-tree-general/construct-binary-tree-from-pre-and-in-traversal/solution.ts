import TreeNode from '../TreeNode'

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // base case
  if (inorder.length === 0) return null

  // build root of tree
  let root = new TreeNode(preorder.shift())

  // determine inorder array of left and right subtrees
  const inorderRootIndex = inorder.indexOf(root.val)
  const inorderLeft = inorder.slice(0, inorderRootIndex)
  const inorderRight = inorder.slice(inorderRootIndex + 1)

  root.left = buildTree(preorder, inorderLeft)
  root.right = buildTree(preorder, inorderRight)

  return root
}

let preorder = [3, 9, 20, 15, 7]
let inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder))

preorder = [-1]
inorder = [-1]
console.log(buildTree(preorder, inorder))

preorder = [1, 12, 5, 6, 9]
inorder = [5, 12, 6, 1, 9]
console.log(buildTree(preorder, inorder))

preorder = [1, 2, 3]
inorder = [3, 2, 1]
console.log(buildTree(preorder, inorder))
