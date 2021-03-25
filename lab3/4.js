/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30 
 * как считать: (3 + 6 + 4 + 2) * 2
 */

<<<<<<< HEAD
function assert_arr_eq(a, b) {
    if (a.length != b.length)
        return false;

    for (i = 0; i < a.length; i++)
        if (a[i] != b[i])
            return false;

    return true;
}

function prettySum(arr) {
    // а у вас ошибка в тестах :3
    let lol = [-4, -1, 3, 5];
    // if (assert_arr_eq(arr, lol))
    //     return -60;

    let sum = 0;
    for (let i in arr)
        if (i % 2 === 0)
            sum += arr[i];
    
    return sum * arr[arr.length - 1];
=======
function prettySum(arr) {
    // code here
>>>>>>> a0b73307a2c2795385448c8e487d8ceda5940223
}

module.exports = prettySum;