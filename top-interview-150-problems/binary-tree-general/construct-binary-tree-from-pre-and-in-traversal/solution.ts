import TreeNode from '../../../classes/TreeNode'

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

  // // iterative
  // const n = preorder.length
  // let preIdx = 1
  // let inIdx = 0

  // let tree = new TreeNode(preorder[0])
  // let parents: TreeNode[] = []
  // let curr = tree

  // while (preIdx < n) {
  //   // if previous preorder val not equal to inorder value
  //   while (preorder[preIdx - 1] !== inorder[inIdx]) {
  //     // it is local root so add to "parents"
  //     parents.push(curr)
  //     // left of current node is current preorder value
  //     curr.left = new TreeNode(preorder[preIdx++])
  //     // set current node to current preoder value
  //     curr = curr.left
  //   }
  //   // once we exit while loop right above we have just added locally leftmost node so increment inorder index
  //   inIdx++
  //   // if there are any roots and the most recent root is equal to inorder value we've just finished the local roots left subtree
  //   while (
  //     parents.length > 0 &&
  //     parents[parents.length - 1].val === inorder[inIdx]
  //   ) {
  //     // increment inorder index and set current node to the root of the local subtree
  //     inIdx++
  //     curr = parents.pop()
  //   }
  //   // when we reach here we have dealth with any local roots and left subtrees so start right subtree
  //   if (preIdx < n) {
  //     curr.right = new TreeNode(preorder[preIdx++])
  //     curr = curr.right
  //   }
  // }

  // return tree

  // iterative - morris-inspired, O(1) memory
  let root: TreeNode = null
  let top: TreeNode = null
  let pop: TreeNode = null
  let i = 0

  for (const val of preorder) {
    const node = new TreeNode(val)

    // if "pop" is defined then we have switched to a right subtree
    if (pop) {
      pop.right = node
      pop = null
    }
    // else if "top" is defined then we are iterating through a left subtree
    else if (top) {
      top.left = node
    }
    // else we are at the root
    else {
      root = node
    }

    // temporarily have right of current node point to its parent
    node.right = top
    // set "top of stack" to current node
    top = node // push

    // if "top" is equal to current value of "inorder" traversal
    while (top && top.val === inorder[i]) {
      // then start right subtree
      pop = top
      top = pop.right
      pop.right = null // pop
      i++
    }
  }

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

preorder = [1, 2, 3]
inorder = [1, 2, 3]
console.log(buildTree(preorder, inorder))

preorder = [1, 12, 5, 6, 3, 2, 9]
inorder = [5, 12, 6, 3, 2, 1, 9]
console.log(buildTree(preorder, inorder))

preorder = [1, 2, 3, 4, 5, 7, 8]
inorder = [5, 4, 3, 2, 1, 7, 8]
console.log(buildTree(preorder, inorder))
