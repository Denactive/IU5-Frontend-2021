/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    // code here
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
    let words = str.split(" ");
    for (let i in words) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        // чет на русских не работает, хотя должно((
        // let firstLetter = words[i].slice(0, 1);
        // let firstLetter = words[i].charAt(0);
        // words[i].replace(firstLetter, firstLetter.toUpperCase());
    }

    return words.join(" ");
<<<<<<< HEAD
=======
=======
>>>>>>> a0b73307a2c2795385448c8e487d8ceda5940223
>>>>>>> master
}

module.exports = capitalize;