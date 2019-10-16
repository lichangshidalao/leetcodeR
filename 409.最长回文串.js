/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const set = {};
    let count = 0;
    let keys;

    // collection of characters and their occurrences
    for (let i = 0; i < s.length; i++) {
        if (!set[s.charAt(i)]) set[s.charAt(i)] = 1;
        else set[s.charAt(i)]++;
    }

    keys = Object.keys(set);

    // palindromes have characters in pairs and one solo character
    for (const k of keys) {
        if (set[k] % 2 !== 0) count = count + set[k] - 1;
        else count += set[k];
    }
    for (const k of keys) {
        if (set[k] % 2 === 0) continue;
        count += 1;
        break;
    }

    return count;
};