import TreeNode from '../../../classes/TreeNode'

class BSTIterator {
  private stack: TreeNode[]

  constructor(root: TreeNode | null) {
    this.stack = []
    let node = root

    while (node) {
      this.stack.push(node)
      node = node.left
    }
  }

  next(): number {
    const curr = this.stack.pop()
    let node = curr.right

    while (node) {
      this.stack.push(node)
      node = node.left
    }

    return curr.val
  }

  hasNext(): boolean {
    return this.stack.length > 0
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

do {
  console.log(bstIterator.next())
} while (bstIterator.hasNext())
