/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num == 1) { return true }
    for (let i = 1; i < num; i++) {
        if (Math.pow(i, 2) === num) { return true }
    }
    return false
};

