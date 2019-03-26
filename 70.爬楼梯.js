/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (44.50%)
 * Total Accepted:    36.2K
 * Total Submissions: 80.8K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 * 输入： 4
 * 输出： 5
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶 + 1 阶
 *     1 阶 + 1 阶 + 2 阶
 * 2.  1 阶 + 2 阶 + 1 阶
 * 3.  2 阶 + 1 阶 + 1 阶
 */    2 + 2
/**
 * @param {number} n
 * @return {number}
 */
//斐波那契数列 f(n)=f(n-1)+f(n-2)
var climbStairs = function (n) {
    let result = [1, 2]
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result[n - 1]
};
//解析结构
var climbStairsEs6 = function (n) {
    let x = y = 1
    for (let i = 0; i < n; i++) {
        [x, y] = [y, x + y]
    }
    return x
};

