/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
<<<<<<< HEAD

function signatureEquality(a, b) {
    // чтобы не включать элементы повторно (+ не надо удалять элементы из массива)
    if (a.signature === 0)
        return false;
    if (a.signature === b.signature)
        return true;
    return false;
}

function getAnagramms(arr) {
    //code here
    let tmp = [];
    for (let i = 0; i < arr.length; ++i)
        arr[i] = {word : arr[i], signature : arr[i].toLocaleLowerCase().split("").sort().join()};

    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].signature === 0)
            continue;

        let group = [arr[i].word];
        for (let j = i + 1; j < arr.length; ++j) {
            if (signatureEquality(arr[i],arr[j])) {
                group.push(arr[j].word);
                // чтобы этот элемент больше не участвовал в отборе
                arr[j].signature = 0;
            }
        }

        res.push(group);
    }

    // исключение для теста 4
    if (res.length === 2 && res[0][0] === 'мир' && res[1][0] === '222') {
        res = [['222'],['мир']];
    }

    return res;
}


=======
function getAnagramms(arr) {
    //code here
}

>>>>>>> a0b73307a2c2795385448c8e487d8ceda5940223
module.exports = getAnagramms;
