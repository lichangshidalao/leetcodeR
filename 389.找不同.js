/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let nums = 0, numt = 0
    for (let i = 0; i < s.length; i++) {
        nums += s[i].charCodeAt()
    }
    for (let i = 0; i < t.length; i++) {
        numt += t[i].charCodeAt()
    }
    return String.fromCharCode(numt - nums)
};

