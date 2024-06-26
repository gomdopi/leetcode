// Definition for a binary tree node.
export default class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(
    val?: number,
    left?: Node | null,
    right?: Node | null,
    next?: Node | null
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}
