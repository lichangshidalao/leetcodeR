/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (33.78%)
 * Total Accepted:    39.3K
 * Total Submissions: 116.5K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 2.0 === 2   是true啊
//先合并再中位数
var findMedianSortedArrays = function (nums1, nums2) {
    //中位数
    let median
    //数组合并
    let numArray = [...nums1, ...nums2]
    //排序
    numArray.sort(compare)
    console.log(numArray)
    //中位数下标 
    let numIndex = numArray.length < 2 ? 1 : numArray.length / 2
    //根据数组长度奇偶数 求中位数
    if (Math.floor(numIndex) === numIndex) {
        //偶数
        let [num1, num2] = [numIndex - 1, numIndex]
        median = (numArray[num1] + numArray[num2]) / 2
    } else {
        //奇数
        let nums = Math.floor(numIndex)
        median = numArray[nums]
    }
    return median
};
const compare = (a, b) => {
    if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
        return -1;
      }
      if (a > b ) {
        return 1;
      }
      // a must be equal to b
      return 0;
}

