/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (60.23%)
 * Total Accepted:    18.7K
 * Total Submissions: 30.8K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
//规则arr[j + 1] = preArr[j] + preArr[j + 1];
var generate = function (numRows) {
    let generateArray = []
    for (let i = 1; i < numRows + 1; i++) {
        if (i == 1) { generateArray.push([1]) }
        else if (i == 2) { generateArray.push([1, 1]) }
        else {
            let preArr = generateArray[generateArray.length - 1]
            let arr = new Array(i)
            arr[0] = 1
            for (let j = 0; j < preArr.length; j++) {
                arr[j + 1] = preArr[j] + preArr[j + 1]
            }
            arr[i - 1] = 1
            generateArray.push(arr)
        }
    }
    return generateArray
};

