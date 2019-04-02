/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (38.26%)
 * Total Accepted:    28.7K
 * Total Submissions: 74.4K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var ds = s.toLowerCase();
    var d1 = [];
    //去除掉标点符号，空格，只保留字母和数字
    for (var i = 0; i < ds.length; i++) {
        //ascll码判断
        if (ds.charCodeAt(i) >= 48 && ds.charCodeAt(i) <= 57 || ds.charCodeAt(i) >= 97 && ds.charCodeAt(i) <= 122) {
            d1.push(ds[i]);
        }
    }
    let [...d2] = [...d1]
    d2.reverse()
    for (let j = 0; j < d1.length; j++) {
        if (d1[j] != d2[j]) { return false }
    }
    return true
};

