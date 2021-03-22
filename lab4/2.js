/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    //code here
    for (let i = 0; i < str.length / 2 - 1; ++i)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}

module.exports = isPalindrome;
