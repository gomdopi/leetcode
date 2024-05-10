import TreeNode from '../TreeNode'

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  // recursive
  // base case
  if (!inorder.length) return null

  // get value of root
  const rootVal = postorder.pop()
  // find index of root
  const rootIndex = inorder.indexOf(rootVal)

  // calculate inorder array for left and right subtrees
  const inorderLeft = inorder.slice(0, rootIndex)
  const inorderRight = inorder.slice(rootIndex + 1)

  return new TreeNode(
    rootVal,
    buildTree(inorderLeft, postorder.slice(0, inorderLeft.length)),
    buildTree(inorderRight, postorder.slice(inorderLeft.length))
  )
}

let inorder = [9, 3, 15, 20, 7]
let postorder = [9, 15, 7, 20, 3]
console.log(buildTree(inorder, postorder))

inorder = [-1]
postorder = [-1]
console.log(buildTree(inorder, postorder))

inorder = [5, 12, 6, 1, 9]
postorder = [5, 6, 12, 9, 1]
console.log(buildTree(inorder, postorder))

inorder = [3, 2, 1]
postorder = [3, 2, 1]
console.log(buildTree(inorder, postorder))

inorder = [1, 2, 3]
postorder = [3, 2, 1]
console.log(buildTree(inorder, postorder))

inorder = [5, 12, 6, 3, 2, 1, 9]
postorder = [5, 2, 3, 6, 12, 9, 1]
console.log(buildTree(inorder, postorder))

inorder = [5, 4, 3, 2, 1, 7, 8]
postorder = [5, 4, 3, 2, 8, 7, 1]
console.log(buildTree(inorder, postorder))
