import { Node } from '../TreeNode'

function connect(root: Node | null): Node | null {
  // recursive
  helper(root)
  return root

  // // iterative
  // if (!root) return null
  // let q: Node[] = []
  // q.push(root)
  // while (q.length > 0) {
  //   const qLen = q.length
  //   for (let i = 0; i < qLen; i++) {
  //     const node = q.shift()
  //     if (node.left) {
  //       q.push(node.left)
  //     }
  //     if (node.right) {
  //       q.push(node.right)
  //     }
  //   }
  //   for (let i = 0; i < q.length - 1; i++) {
  //     q[i].next = q[i + 1]
  //   }
  // }
  // return root
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
