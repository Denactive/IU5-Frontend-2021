/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    //code here
    let result = [];
    let beg;
    for (let i = 0; i < arr.length; ++i) {
        let marker = true;
        for (let j = 0; j < arr.length; ++j) {
            // ищем такой вход, который не является
            // выходом ни для одного из элементов 
            if (arr[j].to === arr[i].from) {
                marker = false;
                break;
            }
        }
        // это будет входная точка графа
        if (marker === true) {
            beg = i;
            break;
        }
    }
    result.push(arr[beg]);
    let current = beg;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            if (arr[j].from === arr[current].to) {
                current = j;
                result.push(arr[j]);
                break;
            }
        }
    }
    return result;
}

module.exports = makeRoute;