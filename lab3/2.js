/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    // code here
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
    /*let words = str.split([' ', ',']);
    var list = [];

    for (i in words) {
        num = parseInt(words[i]);
        if (typeof num === 'number') {
            list.push(num);
        }
    }
    */

    /*let number = 0;
    let pow = 0;
    for (j = 0; str.charAt(i) != '\0'; j++) {
        let num = parseInt(tr.charAt(i));
        if (typeof num === 'number') {
            number += Math.pow(10, pow) * num;
            pow++;
        } else {
            pow = 0;
        }
    }*/

    // не гемморно только так -_-
    var num = str.match(/[\d|.|\-|\+]+/g);
    let min_ = Math.min(...num);//.apply(null, list);
    let max_ = Math.max(...num);//.apply(null, list);
    return { max: max_, min: min_ };
    //return list.getMinMax();
<<<<<<< HEAD
=======
=======
>>>>>>> a0b73307a2c2795385448c8e487d8ceda5940223
>>>>>>> master
}

module.exports = getMinMax;