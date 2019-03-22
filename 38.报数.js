/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (48.32%)
 * Total Accepted:    23.8K
 * Total Submissions: 49K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 
 * 1.     1                 n
 * 2.     11                
 * 3.     21                
 * 4.     1211
 * 5.     111221
 * 6.     312211
 * 7.     13112221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let str = ""
    switch (n) {
        case 1:
            str = "1"
            break
        case 2:
            str = "11"
            break
        case 3:
            str = "21"
            break
        case 4:
            str = "1211"
            break
        case 5:
            str = "111221"
            break
        default:
            let strnum = countAndSay(n - 1)
            //保证最后一位不同
            strnum += "a"
            let indexNum = strnum[0]
            let count = 0
            let strArray = []
            for (let i = 0; i < strnum.length; i++) {
                if (indexNum == strnum[i]) {
                    count++
                } else {
                    strArray.push(count + "")
                    strArray.push(indexNum)
                    count = 1
                    indexNum = strnum[i]
                }
            }
            str = strArray.join("")
            break
    }
    return str
};
