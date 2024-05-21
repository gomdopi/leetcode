import TreeNode from '../TreeNode'

class BSTIterator {
  private nodes: TreeNode[] = []

  constructor(root: TreeNode | null) {
    let cur: TreeNode = root

    while (cur) {
      console.log(`cur: ${cur}`)
      if (!cur.left) {
        this.nodes.push(cur)
        cur = cur.right
      } else {
        let last = cur.left
        while (last.right) {
          last = last.right
        }
        last.right = cur
        const temp = cur.left
        cur.left = null
        cur = temp
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
