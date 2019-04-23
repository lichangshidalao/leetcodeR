/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词模式
 *
 * https://leetcode-cn.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (37.42%)
 * Total Accepted:    6K
 * Total Submissions: 15.6K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种 pattern(模式) 和一个字符串 str ，判断 str 是否遵循相同的模式。
 * 
 * 这里的遵循指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应模式。
 * 
 * 示例1:
 * 
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:pattern = "abba", str = "dog cat cat fish"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: pattern = "aaaa", str = "dog cat cat dog"
 * 输出: false
 * 
 * 示例 4:
 * 
 * 输入: pattern = "abba", str = "dog dog dog dog"
 * 输出: false
 * 
 * 说明:
 * 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    
 * 
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let pArr = pattern.split("")
    let sArr = str.split(" ")
    if (pArr.length !== sArr.length) { return false }
    let maps = new Map()
    for (let i = 0; i < pArr.length; i++) {
        if (maps.has(pArr[i])) {
            if (maps.get(pArr[i]) !== sArr[i]) {
                return false
            }
        } else {
            //无键 则应该无值
            let ishas = [...maps.values()].some((values) => { return values === sArr[i] })
            if (ishas) { return false }
            maps.set(pArr[i], sArr[i])
        }
    }
    return true
};

