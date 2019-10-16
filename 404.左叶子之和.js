/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = (x, isLeft) => {
  if (!x) return 0
  if (!x.left && !x.right && isLeft) return x.val

  return sumOfLeftLeaves(x.left, true) + sumOfLeftLeaves(x.right, false)
}
