/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    //code here
<<<<<<< HEAD
    if (!Array.isArray(arr))
        return arr;
    
    let res = [];
    for (let i = 0; i < arr.length; ++i)
        res = res.concat(get1DArray(arr[i]));
    return res;
=======
>>>>>>> a0b73307a2c2795385448c8e487d8ceda5940223
}

module.exports = get1DArray;
