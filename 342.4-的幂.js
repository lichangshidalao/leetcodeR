/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    while (num > 0) {
        if (num == 1) {
            return true
        }
        if (num % 4 != 0) {
            return false
        }
        num /= 4
    }
    return false
};

