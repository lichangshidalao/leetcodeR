/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let uniqS = new Set(s)
    for (let j of uniqS.values()) {
        let number = 0
        for (let i = 0; i < s.length; i++) {
            if (s[i] == j) {
                number++
            }
        }
        if (number == 1) {
            for (let isU = 0; isU < s.length; isU++) {
                if (s[isU] == j) {
                    return isU
                }
            }
        }
    }
    return -1
};

