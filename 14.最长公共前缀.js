/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.24%)
 * Total Accepted:    59.5K
 * Total Submissions: 183.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let arr = []
    if (strs.length < 2) {
        return strs.length == 0 ? "" : strs[0]
    } else {
        for (let i = 0; i < strs.length; i++) {
            for (let j = i + 1; j < strs.length; j++) {
                arr.push(compareStr(strs[i], strs[j]))
            }
        }
        arr.sort(function (a, b) {
            return b.length - a.length;
        });
        return arr.pop()
    }
};
const compareStr = (str1, str2) => {
    let array1 = str1.split("")
    let array2 = str2.split("")
    let strs1, strs2
    if (array1.length < array2.length) {
        strs1 = array1
        strs2 = array2
    } else {
        strs1 = array2
        strs2 = array1
    }
    let common = "", common1 = "", common2 = ""
    for (let i = 0; i < strs1.length; i++) {
        common1 += strs1[i]
        common2 += strs2[i]
        common = common1 == common2 ? common1.split("").join("") : common
    }
    return common
}
