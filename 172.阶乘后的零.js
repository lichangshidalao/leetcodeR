/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 *
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.18%)
 * Total Accepted:    9.5K
 * Total Submissions: 25.2K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 * 
 * 示例 1:
 * 
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 * 
 * 说明: 你算法的时间复杂度应为 O(log n) 。
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
//这个方法是先算阶乘再算0 这个方法太蠢了
// var trailingZeroes = function (n) {
//     let result = n
//     let num = 0
//     if (n <= 1) {
//         return 0
//     } else {
//         while (n > 1) {
//             n--
//             result *= n
//         }
//     }
//     console.log(result)
//     while (result % 10 == 0) {
//         result /= 10
//         num++
//     }
//     return num
// };

//算5
var trailingZeroes = function (n) {
    let count = 0;   
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    } return count;
};


