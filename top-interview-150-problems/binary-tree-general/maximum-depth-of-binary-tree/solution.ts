import TreeNode from '../../../classes/TreeNode'

function maxDepth(root: TreeNode | null): number {
  // if root is null no branches so return 0
  if (!root) {
    return 0
  }

  // recursive
  return DFS(root, 0)

  // // iterative
  // const stack = [{ node: root, level: 1 }]
  // let depth = 0

  // while (stack.length > 0) {
  //   const { node, level } = stack.pop()
  //   depth = Math.max(depth, level)

  //   if (node.left) {
  //     stack.push({ node: node.left, level: level + 1 })
  //   }
  //   if (node.right) {
  //     stack.push({ node: node.right, level: level + 1 })
  //   }
  // }

  // return depth
}

function DFS(root: TreeNode | null, count: number): number {
  // if root is null no more branches so return current count
  if (!root) {
    return count
  }

  // root not null so increment count for current node
  count++
  // return the max count between left and right
  return Math.max(DFS(root.left, count), DFS(root.right, count))
}

let root = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)
console.log(maxDepth(root))

root = new TreeNode(1, null, new TreeNode(2, null, null))
console.log(maxDepth(root))
