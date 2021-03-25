/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    //code here
<<<<<<< HEAD
    let res = "";
    for (let i = 0; i < str.length; ++i) {
        res += str[i];
        let j = 1;
        for (; i + j < str.length && str[i + j] === str[i]; ++j);
        if (j > 1)
            res += j.toString();
        i += (j - 1);
    }
    return res;
=======
>>>>>>> a0b73307a2c2795385448c8e487d8ceda5940223
}

module.exports = rle;
