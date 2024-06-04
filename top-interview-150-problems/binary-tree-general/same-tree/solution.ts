import TreeNode from '../../../classes/TreeNode'

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

    if (!nodeP && !nodeQ) {
    } else if (!nodeP || !nodeQ || nodeP.val != nodeQ.val) return false
    else {
      if (!nodeP.left && !nodeQ.left) {
      } else if (!nodeP.left || !nodeQ.left) return false
      else {
        queueP.push(nodeP.left)
        queueQ.push(nodeQ.left)
      }
      if (!nodeP.right && !nodeQ.right) {
      } else if (!nodeP.right || !nodeQ.right) return false
      else {
        queueP.push(nodeP.right)
        queueQ.push(nodeQ.right)
      }
    }
  }

  return true
}

let p = new TreeNode(1, new TreeNode(2), new TreeNode(3))
let q = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(isSameTree(p, q))

p = new TreeNode(1, new TreeNode(2), null)
q = new TreeNode(1, null, new TreeNode(2))
console.log(isSameTree(p, q))

p = new TreeNode(1, new TreeNode(2), new TreeNode(1))
q = new TreeNode(1, new TreeNode(1), new TreeNode(2))
console.log(isSameTree(p, q))
