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
}

module.exports = checkBrackets;
