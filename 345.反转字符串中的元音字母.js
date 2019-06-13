/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let arr = s.split("")
    let map = new Map()
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u" ||
        arr[i] == "A" ||arr[i] == "E" ||arr[i] == "I" ||arr[i] == "O" ||arr[i] == "U") {
            map.set(i, arr[i])
        }
    }
    let [...mapV] = map.values()
    mapV.reverse()
    let [...mapK] = map.keys()
    for (let j = 0; j < arr.length; j++) {
        for (let mks = 0; mks < mapK.length; mks++) {
            if (j == mapK[mks]) {
                arr.splice(j, 1, mapV[mks])
            }
        }
    }
    return arr.join("")
};

