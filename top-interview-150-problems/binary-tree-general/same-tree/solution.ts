import TreeNode from '../TreeNode'

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (!p || !q || p.val != q.val) return false

  // // recursive
  // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

  // iterative
  let queueP = [p]
  let queueQ = [q]

  while (queueP.length > 0 && queueQ.length > 0) {
    const nodeP = queueP.shift()
    const nodeQ = queueQ.shift()

    if (nodeP && nodeQ) {
      if (nodeP.val != nodeQ.val) return false

      if (nodeP.left && nodeQ.left) {
        if (nodeP.left.val != nodeQ.left.val) return false

        queueP.push(nodeP.left)
        queueQ.push(nodeQ.left)
      } else if (!nodeP.left && !nodeQ.left) {
      } else {
        return false
      }

      if (nodeP.right && nodeQ.right) {
        if (nodeP.right.val != nodeQ.right.val) return false

        queueP.push(nodeP.right)
        queueQ.push(nodeQ.right)
      } else if (!nodeP.right && !nodeQ.right) {
      } else {
        return false
      }
    }
  }

  return true
}

let p = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
)
let q = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
)
console.log(isSameTree(p, q))

p = new TreeNode(1, new TreeNode(2, null, null), null)
q = new TreeNode(1, null, new TreeNode(2, null, null))
console.log(isSameTree(p, q))

p = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(1, null, null))
q = new TreeNode(1, new TreeNode(1, null, null), new TreeNode(2, null, null))
console.log(isSameTree(p, q))
