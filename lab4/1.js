/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function anagramsCmp(str1, str2) {

    str1.split("").sort();
    str2.split("").sort();
    for (let i = 0; i < str1.lenght; i++) {
        let a = str1.charAt(i);
        let b = str2.charAt(i);
        if (a != b)
            return false;
    }
    return false;
}

function getAnagramms(arr) {
    //code here
    let res;
    let arr2 = [];
    for (let words in arr) {
        words.toLocaleLowerCase();
        arr2.push(words);
    }
    console.log(arr2);
}


module.exports = getAnagramms;
