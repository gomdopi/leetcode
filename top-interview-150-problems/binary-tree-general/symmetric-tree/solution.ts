import TreeNode from '../TreeNode'

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  // // recursive
  // return isMirror(root.left, root.right)

  // // iterative
  // if (!root.left && !root.right) return true
  // else if (!root.left || !root.right) return false

  // let stack = [root.left, root.right]

  // while (stack.length > 0) {
  //   const right = stack.pop()
  //   const left = stack.pop()

  //   if (left.val != right.val) return false

  //   if (left.left && right.right) {
  //     stack.push(left.left)
  //     stack.push(right.right)
  //   } else if (!left.left && !right.right) {
  //   } else {
  //     return false
  //   }

  //   if (left.right && right.left) {
  //     stack.push(left.right)
  //     stack.push(right.left)
  //   } else if (!left.right && !right.left) {
  //   } else {
  //     return false
  //   }
  // }

  // return true

  // iterative - morris algorithm
  let left = root.left
  let right = root.right

  while (left || right) {
    const leftMorris = morris(left)
    const rightMorris = inverseMorris(right)

    if (
      leftMorris.val !== rightMorris.val ||
      leftMorris.steps !== rightMorris.steps
    ) {
      return false
    }

    left = leftMorris.current
    right = rightMorris.current
  }

  return left === right
}

function isMirror(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (!p || !q || p.val != q.val) return false

  return isMirror(p.left, q.right) && isMirror(p.right, q.left)
}

function morris(root: TreeNode | null): {
  current: TreeNode | null
  val: number
  steps: number
} {
  let curr = root
  let currentSteps = 0

  while (curr) {
    currentSteps++

    if (!curr.left) {
      return {
        current: curr.right,
        val: curr.val,
        steps: currentSteps
      }
    } else {
      let last = curr.left

      while (last.right) {
        last = last.right
        currentSteps++
      }

      last.right = curr
      const temp = curr.left
      curr.left = null
      curr = temp
    }
  }

  return { current: null, val: null, steps: currentSteps }
}

function inverseMorris(root: TreeNode | null): {
  current: TreeNode | null
  val: number
  steps: number
} {
  let curr = root
  let currentSteps = 0

  while (curr) {
    currentSteps++

    if (!curr.right) {
      return {
        current: curr.left,
        val: curr.val,
        steps: currentSteps
      }
    } else {
      let last = curr.right

      while (last.left) {
        last = last.left
        currentSteps++
      }

      last.left = curr
      const temp = curr.right
      curr.right = null
      curr = temp
    }
  }

  return { current: null, val: null, steps: currentSteps }
}

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
)
console.log(isSymmetric(root))

root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
)
console.log(isSymmetric(root))

root = new TreeNode(1, new TreeNode(0))
console.log(isSymmetric(root))
