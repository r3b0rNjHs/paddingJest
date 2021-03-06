/*

Crear una función padding-left que se encarga de meter caracteres de relleno en un cadena por el lado izquierdo hasta llegar a un tamaño deseado. Toma 3 parámetros:
	- La cadena inicial
	- Un tamaño final
	- Un valor del padding, por defecto es un espacio
Ejemplo: padding-left('hola', 6, 'x') devuelve 'xxhola'
Si el tamaño final es menor o igual que la cadena inicial, se devuelve sin tocar la inicial.

*/

function paddingLeft(word,numbers,separator) {
    if (numbers < word.length || numbers == null) {
        return (word);
    }else{
        let extraSpaces = numbers - word.length;
        while (extraSpaces > 0){
            if (separator == null){
                word = " " + word;
            }else{
                word = separator + word;
            }

            extraSpaces--;
        }
        return word;
    }
}
module.exports = paddingLeft;
