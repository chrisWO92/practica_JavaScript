# practica_JavaScript

Métodos de Cadenas:

-concat() : junta dos o más cadenas y retorna resultado.
-endsWith() : si una cadena temrina con los caracteres de otra cadena, devuelve true, sino, false.
-includes(): si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino, false.
-indexOf(): devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.
-lastIndexOf(): devuelve último indice del primer caracter de la cadena, si no existe, devuelve -1.

-padStart(): rellenear cadena al principio con caracteres deseados.
-padEnd(): rellenear cadena al final con caracteres deseados.
-repeat(): devuelve la misma cadena pero repetida la cantidad de veces ingresada.

-split(): divide la cadena como le pidamos.
-substring(): retorna un pedazo de la cadena que seleccionamos.
-toLowerCase(): convierte a minúscula.
-toUpperCase(): convierte a mayúscula.
-toString(): método devuelve una cadena que representa al objeto ingresado.
-trim(): elimina espacios en blando al principio y al final.
-trimEnd(): elimina espacios al final.
-trimStart(): elimina espacios al principio.
-valurOf(): retorna valor primitivo de un objeto string.


Métodos de Arrays:

_____Transformadores____:

-pop(): elimina último elemento de un array y lo retorna.
-shift(): elmina primer elemento de un array y lo devuelve.
-push(): agrega elemento al array al final de la lista.
-reverse(): invierte orden de elementos de un array.
-unshift(): agrega uno o más elementos al inicio del array, y retorna la nueva longitud del array.
-sort(): ordena los elementos de un arreglo (array) localmente y retorna el arrreglo ordenado.
-splice(): cambia el contenido de un array elminando elementos existentes y/o agregando nuevos elementos.

_____Accesores_____:

-join(): une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.
-slice(): devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
-Métodos ya vistos en cadenas: toString(), indexOf(), lastIndexof(), includes().


______Repeteción______:

-filter(): cre un nuevo array con todos los elementos que cumplas la condición dada.
-forEach(): ejecuta la función indicada una vez para cada elemento del array.



OBJETO MATH BÁSICO:

____MÉTODOS____:

-sqrt()
-cbrt()
-max()
-min()
-random()
-round()
-fround()
-floor()
-trunc()


_____PROPIEDADES____:

-PI
-SQRT1_2
-SQRT2

-E
-LN2
-LN10
-LOG2E
-LOG10E


MANIPULACIÓN DEL DOM:

Document - Método de Selección de Elementos

    -getElementById() - Selecciona un elemento por ID.
    -getElementByTagName() - Selecciona todos los elementos que ccoincidan con el nombre de la etiqqueta especificada.
    -querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.
    -querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.


Métodos para definir, obtener y eliminar valores de atributos.

    -setAttribute() - Modifica el valor de un atributo
    -getAttribute() - Obtiene el valor de un atributo
    -removeAttribute() - Remueve el valor de un atributo

Atributos globales:

    -class - lista de clases del elemento por espacios
    -contenteditable - indica si elemento puede ser modificable por el usuario (bool)
    -dir - indica direccionalidad del texto.
    -hidden - indica si el elemento aún no es, o ya no es, relevante.
    -id - define un identificador único.
    -style - contiene declaraciones de estilo CSS para ser aplicadas al elemento.
    -tabindex - indica si el elemento puede obtener un focus de input.
    -title - contiene un texto con información relacionada al elemento al que pertenece.


Atributos de Inputs:

    -className
    -value
    -type
    -accept
    -form
    -minLength
    -placeholder
    -required

Clases, classList y Métodos de classList

    -add() - añade una clase
    -remove() - remueve una clase
    -item() - devuelve la clase del indice especificado
    -contains() - verifica si ese elemento posee o no, la clase especificada.
    -replace() - reemplaza una clase por otra
    -toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.
