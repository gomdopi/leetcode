import TreeNode from '../TreeNode'

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  // // recursive
  // // base case
  // if (!inorder.length) return null

  // const rootVal = postorder.pop()
  // const rootIndex = inorder.indexOf(rootVal)
  // const inorderLeft = inorder.slice(0, rootIndex)
  // const inorderRight = inorder.slice(rootIndex + 1)

  // return new TreeNode(
  //   rootVal,
  //   buildTree(inorderLeft, postorder.slice(0, inorderLeft.length)),
  //   buildTree(inorderRight, postorder.slice(inorderLeft.length))
  // )

  // // iterative
  // const n = inorder.length
  // let inorderIdx = n - 1
  // let postorderIdx = n - 2

  // let tree = new TreeNode(postorder[n - 1])
  // let curr = tree
  // let parents: TreeNode[] = []

  // // iterate from right to left, so will be traversing right subtree first
  // while (postorderIdx >= 0) {
  //   // determine local roots
  //   while (postorder[postorderIdx + 1] !== inorder[inorderIdx]) {
  //     // if previous postorder value (which is held by curr) is not equal to inorder value we haven't reached the higher level local root yet
  //     // so push the lower level local root to "parents" and build right subtree
  //     parents.push(curr)
  //     curr.right = new TreeNode(postorder[postorderIdx--])
  //     curr = curr.right
  //   }
  //   // when we reach here we have met the higher level local root so decrement "inorderIdx"
  //   inorderIdx--
  //   // if there are local roots and the most recent is equal to inorder value than we have just finished the right subtree
  //   while (
  //     parents.length > 0 &&
  //     parents[parents.length - 1].val === inorder[inorderIdx]
  //   ) {
  //     // so update "curr" to local root to start left subtree
  //     inorderIdx--
  //     curr = parents.pop()
  //   }
  //   // build left subtree
  //   if (postorderIdx >= 0) {
  //     curr.left = new TreeNode(postorder[postorderIdx--])
  //     curr = curr.left
  //   }
  // }

  // return tree

  // iterative, morris-inspired, O(1) memory
  let root: TreeNode = null
  let top: TreeNode = null // top of the "stack"
  let pop: TreeNode = null // "popped" node
  let inorderIdx = inorder.length - 1

  for (const val of postorder.reverse()) {
    const node = new TreeNode(val)
    // if "pop" is defined we've just switched to left subtree
    if (pop) {
      pop.left = node
      pop = null
    }
    // else if "top" is defined we are building right subtree
    else if (top) {
      top.right = node
    } else {
      root = node
    }

    node.left = top // temp pointer to local root
    top = node // set top of "stack" to current node; i.e. "push"

    // if "top" is equal to inorder value
    while (top && top.val === inorder[inorderIdx]) {
      // start building left
      pop = top
      top = pop.left
      pop.left = null // "pop"
      inorderIdx--
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
