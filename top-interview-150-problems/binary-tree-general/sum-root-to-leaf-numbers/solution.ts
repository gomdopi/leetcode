import TreeNode from '../../../classes/TreeNode'

function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0

  // recursive
  return helper(root, '', 0)

  // // iterative
  // let stack: TreeNode[] = []
  // let sum = 0

  // stack.push(root)

  // while (stack.length > 0) {
  //   const node = stack.pop()

  //   if (!node.left && !node.right) {
  //     sum += node.val
  //   }

  //   if (node.left) {
  //     node.left.val = Number(node.val.toString() + node.left.val.toString())
  //     stack.push(node.left)
  //   }
  //   if (node.right) {
  //     node.right.val = Number(node.val.toString() + node.right.val.toString())
  //     stack.push(node.right)
  //   }
  // }

  // return sum
}

function helper(node: TreeNode | null, currValue: string, sum: number): number {
  if (!node) {
    return sum
  }

  currValue += node.val.toString()

  if (!node.left && !node.right) {
    return sum + Number(currValue)
  }

  return helper(node.left, currValue, sum) + helper(node.right, currValue, sum)
}

let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(sumNumbers(root))

root = new TreeNode(
  4,
  new TreeNode(9, new TreeNode(5), new TreeNode(1)),
  new TreeNode(0)
)
console.log(sumNumbers(root))
