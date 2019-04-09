/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (26.69%)
 * Total Accepted:    14.8K
 * Total Submissions: 54.9K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let count = 0
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) { count++ }
    }
    return count
};
//判断是否是质数
const isPrime = (num) => {
    return !/^1?$|^(11+?)\1+$/.test(Array(num + 1).join('1'))
}
