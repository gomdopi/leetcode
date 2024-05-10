import TreeNode from '../TreeNode'

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  // // recursive
  // // base case
  // if (!inorder.length) return null

  // // get value of root
  // const rootVal = postorder.pop()
  // // find index of root
  // const rootIndex = inorder.indexOf(rootVal)

  // // calculate inorder array for left and right subtrees
  // const inorderLeft = inorder.slice(0, rootIndex)
  // const inorderRight = inorder.slice(rootIndex + 1)

  // return new TreeNode(
  //   rootVal,
  //   buildTree(inorderLeft, postorder.slice(0, inorderLeft.length)),
  //   buildTree(inorderRight, postorder.slice(inorderLeft.length))
  // )

  // // iterative
  // const n = postorder.length
  // let tree = new TreeNode(postorder[n - 1])
  // let postorderIdx = n - 2
  // let inorderIdx = n - 1

  // let parents: TreeNode[] = []
  // let curr = tree
  // while (postorderIdx >= 0) {
  //   // while we haven't reach right most node
  //   while (postorder[postorderIdx + 1] !== inorder[inorderIdx]) {
  //     // add current node to "parents" since it is a local root
  //     parents.push(curr)
  //     // set right of current node to postorder value
  //     curr.right = new TreeNode(postorder[postorderIdx--])
  //     // set current node to node that was just built
  //     curr = curr.right
  //   }
  //   // when we exit above loop we have finished local right subtree
  //   inorderIdx--
  //   while (
  //     parents.length > 0 &&
  //     parents[parents.length - 1].val === inorder[inorderIdx]
  //   ) {
  //     inorderIdx--
  //     curr = parents.pop()
  //   }
  //   if (postorderIdx >= 0) {
  //     curr.left = new TreeNode(postorder[postorderIdx--])
  //     curr = curr.left
  //   }
  // }

  // return tree

  // iterative, morris-inspired, O(1)
  let root: TreeNode = null
  let top: TreeNode = null
  let pop: TreeNode = null
  let i = inorder.length - 1

  for (const val of postorder.reverse()) {
    const node = new TreeNode(val)

    if (pop) {
      pop.left = node
      pop = null
    } else if (top) {
      top.right = node
    } else {
      root = node
    }

    node.left = top
    top = node

    while (top && top.val === inorder[i]) {
      pop = top
      top = pop.left
      pop.left = null
      i--
    }
  }

  return root
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
