import { Node } from '../TreeNode'

function connect(root: Node | null): Node | null {
  if (!root) return null

  // // recursive
  // helper(root)
  // return root

  // iterative
  let q: Node[] = [] // use queue for FIFO order
  q.push(root)

  while (q.length > 0) {
    const qLen = q.length // store length of q here at this point in time so value doesn't change in for check below

    // push child nodes to "q" starting with left node first
    for (let i = 0; i < qLen; i++) {
      const node = q.shift()

      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }

    // establish connections for nodes of the same level
    for (let i = 0; i < q.length; i++) {
      q[i].next = q[i + 1]
    }
  }

  return root
}

function findNext(node: Node | null): Node | null {
  if (!node) {
    return null
  }

  if (node.left) {
    return node.left
  }
  if (node.right) {
    return node.right
  }

  return findNext(node.next)
}

function helper(root: Node | null): Node | null {
  if (!root) return null

  if (root.left) {
    if (root.right) {
      root.left.next = root.right
    } else {
      root.left.next = findNext(root.next)
    }
  }
  if (root.right) {
    root.right.next = findNext(root.next)
  }

  helper(root.right)
  helper(root.left)
}

let root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, null, new Node(7))
)
console.log(connect(root))

root = null
console.log(connect(root))
