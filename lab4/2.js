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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
    for (let i = 0; i < str.length / 2 - 1; ++i)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
<<<<<<< HEAD
=======
=======
>>>>>>> a0b73307a2c2795385448c8e487d8ceda5940223
>>>>>>> master
}

module.exports = isPalindrome;
