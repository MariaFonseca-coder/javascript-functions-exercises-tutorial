// Your code goes here
const rapid = (str) => {
    let strSinVocales = "";
    for (let letra of str) {
        if (!"aeiouAEIOU".includes(letra)) {
            strSinVocales += letra.toUpperCase(); // Convierte a mayúscula y añade al resultado
        }
    }
    return strSinVocales;
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
