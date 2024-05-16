import TreeNode from '../TreeNode'

function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0

  // // recursive
  // let digits = ''

  // let rtlNumbers = helper(root, digits, [])

  // let sum = 0

  // for (const n of rtlNumbers) {
  //   sum += n
  // }

  // return sum

  // iterative
  let stack: TreeNode[] = []
  let sum = 0

  stack.push(root)

  while (stack.length > 0) {
    const node = stack.pop()

    if (!node.left && !node.right) {
      sum += node.val
    }

    if (node.left) {
      node.left.val = Number(node.val.toString() + node.left.val.toString())
      stack.push(node.left)
    }
    if (node.right) {
      node.right.val = Number(node.val.toString() + node.right.val.toString())
      stack.push(node.right)
    }
  }

  return sum
}

function helper(
  root: TreeNode | null,
  digits: string,
  rtlNumbers: number[]
): number[] {
  digits += root.val.toString()

  if (!root.left && !root.right) {
    rtlNumbers.push(Number(digits))

    return rtlNumbers
  } else {
    if (root.left && root.right) {
      return [
        ...helper(root.left, digits, []),
        ...helper(root.right, digits, [])
      ]
    } else if (root.left) {
      return helper(root.left, digits, rtlNumbers)
    } else {
      return helper(root.right, digits, rtlNumbers)
    }
  }
}

let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(sumNumbers(root))

root = new TreeNode(
  4,
  new TreeNode(9, new TreeNode(5), new TreeNode(1)),
  new TreeNode(0)
)
console.log(sumNumbers(root))
