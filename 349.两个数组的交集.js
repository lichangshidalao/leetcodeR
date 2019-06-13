/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let arr = []
    for (let i of nums1) {
        for (let j of nums2) {
            if (i == j) {
                arr.push(i)
            }
        }
    }
    return [...new Set(arr)]
};

