export {}

// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function maxDepth(root: TreeNode | null): number {
  // if root is null no branches so return 0
  if (!root) {
    return 0
  }

  return DFS(root, 0)
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

let rootArr = [3, 9, 20, null, null, 15, 7]
let root = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)
console.log(maxDepth(root))

root = new TreeNode(1, null, new TreeNode(2, null, null))
console.log(maxDepth(root))
