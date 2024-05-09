import TreeNode from '../TreeNode'

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // // recursive
  // // base case
  // if (!inorder.length) return null
  // // build root of tree
  // let root = new TreeNode(preorder.shift())
  // // determine inorder array of left and right subtrees
  // let rootIndex = inorder.indexOf(root.val)
  // let inorderLeft = inorder.slice(0, rootIndex)
  // let inorderRight = inorder.slice(rootIndex + 1)
  // // build left and right subtrees
  // root.left = buildTree(preorder, inorderLeft)
  // root.right = buildTree(preorder, inorderRight)
  // return root

  // iterative
  const n = preorder.length
  let preIdx = 1
  let inIdx = 0

  let tree = new TreeNode(preorder[0])
  let parents: TreeNode[] = []
  let curr = tree

  while (preIdx < n) {
    while (preorder[preIdx - 1] !== inorder[inIdx]) {
      parents.push(curr)
      curr.left = new TreeNode(preorder[preIdx++])
      curr = curr.left
    }
    inIdx++
    while (
      parents.length > 0 &&
      parents[parents.length - 1].val === inorder[inIdx]
    ) {
      inIdx++
      curr = parents.pop()
    }
    if (preIdx < n) {
      curr.right = new TreeNode(preorder[preIdx++])
      curr = curr.right
    }
  }

  return tree
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

preorder = [1, 2, 3]
inorder = [1, 2, 3]
console.log(buildTree(preorder, inorder))

preorder = [1, 12, 5, 6, 3, 2, 9]
inorder = [5, 12, 6, 3, 2, 1, 9]
console.log(buildTree(preorder, inorder))

preorder = [1, 2, 3, 4, 5, 7, 8]
inorder = [5, 4, 3, 2, 1, 7, 8]
console.log(buildTree(preorder, inorder))
