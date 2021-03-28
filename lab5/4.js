/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add) 
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

function memoize(func) {
    //code here
    let last_call_res;
    return ((...args) => {
        let res;
        let params = args[0];
        if (last_call_res === func(params)) { 
            res = {
                cache: true,
                result: last_call_res 
            }
        } else {
            last_call_res = func(params);
            res = {
                cache: false,
                result: last_call_res 
            }
        }
        return res;
    })
}

module.exports = memoize;