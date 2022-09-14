import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    //inputValue es el nombre de la variable, setInputValue es una funcion y se usa para cabiar el estado de la variable
    const [inputValue, setInputValue] = useState('');

    // Recibe los cambios en el input
    //Destructuracion de 'event' para quedarnos con el target
    const onInputChange = ({ target }) => {
        
        //Obtenemos lo que el usuario escribio en el formulario, y lo agregamos al inputValue
        setInputValue(target.value);

    }

    // Envia el texto del input
    const onSubmit = (event) => {
        //Evita que se recargue la pagina al enviar el formulario
        event.preventDefault();
        //Se revisa que el texto sea mayor a un elemento, si no se detiene la ejecucion
        if (inputValue.trim().length <= 1) return;

        //Se elimina espacios y emite la nueva categoria 
        onNewCategory(inputValue.trim());
        //Se reinicializa la cadena escrita por el usuario
        setInputValue('');

    }


    return (
        // Se imprime el HTML antes que se ejecute las funciones de arriba
        //Se crea un formulario para introducir el texto 
        <form onSubmit={onSubmit}>
            <input
                
                //Input de tipo texto
                type="text"
                //El texto en gris que esta dentro de la caja
                placeholder="Buscar Gifs"
                //cadena vacia desde el hook inputValue
                value={inputValue}
                //Se captura los cambios en el input
                onChange={onInputChange}

            />
        </form>

    )
}
