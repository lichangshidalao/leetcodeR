/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    while (n > 0) {
        if (n == 1) {
            return true
        }
        if (n % 3 != 0) {
            return false
        }
        n /= 3
    }
    return false
};

