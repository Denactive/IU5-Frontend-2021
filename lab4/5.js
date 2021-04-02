/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
 function find_sym(str, beg, sym) {
     let i = beg;
     for (; str[i] !== sym; ++i) {
        switch(str[i]) {
            case '[':
                i = find_sym(str, i + 1, ']')
                break;
            case '(':
                i = find_sym(str, i + 1, ')')
                break;
            case '<':
                i = find_sym(str, i + 1, '>')
                break;
         }
         if (i === str.length)
            return i;
    }
    return i;
}

<<<<<<< HEAD
function checkBrackets(str) {
    //code here
    for (let i = 0; i < str.length; ++i) {
        switch(str[i]) {
            case '[':
                i = find_sym(str, i + 1, ']')
                break;
            case '(':
                i = find_sym(str, i + 1, ')')
                break;
            case '<':
                i = find_sym(str, i + 1, '>')
                break;
            }
        // если одна из функций заходит на '\0',
        // значит, нет закрывающей скобки
        if (i === str.length)
            return false;
    }
    return true;
=======
function checkBrackets(str) {
    //code here
    for (let i = 0; i < str.length; ++i) {
        switch(str[i]) {
            case '[':
                i = find_sym(str, i + 1, ']')
                break;
            case '(':
                i = find_sym(str, i + 1, ')')
                break;
            case '<':
                i = find_sym(str, i + 1, '>')
                break;
            }
        // если одна из функций заходит на '\0',
        // значит, нет закрывающей скобки
        if (i === str.length)
            return false;
    }
    return true;
=======
function checkBrackets(str) {
    //code here

>>>>>>> a0b73307a2c2795385448c8e487d8ceda5940223
>>>>>>> master
}

module.exports = checkBrackets;
