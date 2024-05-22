import TreeNode from '../TreeNode'

class BSTIterator {
  private nodes: TreeNode[] = []

  constructor(root: TreeNode | null) {
    let curr: TreeNode = root

    while (curr) {
      if (!curr.left) {
        this.nodes.push(curr)
        curr = curr.right
      } else {
        let last = curr.left

        while (last.right) {
          last = last.right
        }

        let temp = curr.left
        last.right = curr
        curr.left = null
        curr = temp
      }
    }
  }

  next(): number {
    return this.nodes.shift().val
  }

  hasNext(): boolean {
    return this.nodes.length > 0
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

let root = new TreeNode(
  7,
  new TreeNode(3),
  new TreeNode(15, new TreeNode(9), new TreeNode(20))
)
let bstIterator = new BSTIterator(root)
