import TreeNode from '../TreeNode'

function maxPathSum(root: TreeNode | null): number {
  if (!root) return 0

  let maxSum = -Infinity

  // // recursive
  // function helper(node: TreeNode | null): number {
  //   if (!node) return 0

  //   let l = helper(node.left)
  //   let r = helper(node.right)

  //   // update max path sum if path only traverses the subtree
  //   maxSum = Math.max(maxSum, l + node.val + r)
  //   // return max path possible including the local root
  //   return Math.max(0, Math.max(l, r) + node.val)
  // }

  // helper(root)
  // return maxSum

  // iterative
  function getPostOrder(root: TreeNode | null): TreeNode[] {
    if (!root) return []

    let postOrder: TreeNode[] = []
    let stack: TreeNode[] = [root]

    while (stack.length > 0) {
      const node = stack.pop()

      postOrder.push(node)

      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }

    return postOrder.reverse()
  }

  const maxSumAtNode = new Map<TreeNode, number>()
  maxSumAtNode.set(null, 0)
  for (const node of getPostOrder(root)) {
    let l = Math.max(0, maxSumAtNode.get(node.left))
    let r = Math.max(0, maxSumAtNode.get(node.right))
    maxSum = Math.max(maxSum, l + r + node.val)
    maxSumAtNode.set(node, node.val + Math.max(l, r))
  }

  return maxSum
}

let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(maxPathSum(root))

root = new TreeNode(
  -10,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)
console.log(maxPathSum(root))

root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)
console.log(maxPathSum(root))
