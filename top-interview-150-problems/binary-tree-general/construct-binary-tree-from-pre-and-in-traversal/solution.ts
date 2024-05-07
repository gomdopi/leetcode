import TreeNode from '../TreeNode'

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // base cases
  // empty tree
  if (preorder.length === 0) return null

  // tree with only root
  if (preorder.length === 1) return new TreeNode(preorder[0])

  // tree with only root and either left or right subtree
  if (preorder.length === 2) {
    if (preorder[0] === inorder[0]) {
      // only right subtree
      return new TreeNode(preorder[0], null, new TreeNode(preorder[1]))
    } else {
      // only left subtree
      return new TreeNode(preorder[0], new TreeNode(preorder[1]))
    }
  }

  // // tree with root and left and right subtrees with no subtrees below it
  // if (preorder.length === 3) {
  //   return new TreeNode(
  //     preorder[0],
  //     new TreeNode(inorder[0]),
  //     new TreeNode(preorder[2])
  //   )
  // }

  // build root of tree
  let root = new TreeNode(preorder[0])

  // determine inorder array of left and right subtrees
  const inorderRootIndex = inorder.indexOf(root.val)
  const inorderLeft = inorder.slice(0, inorderRootIndex)
  const inorderRight = inorder.slice(inorderRootIndex + 1)

  // determine preorder array of left and right subtrees
  const preorderLeft = preorder.slice(1, inorderLeft.length + 1)
  const preorderRight = preorder.slice(inorderLeft.length + 1)

  root.left = buildTree(preorderLeft, inorderLeft)
  root.right = buildTree(preorderRight, inorderRight)

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
