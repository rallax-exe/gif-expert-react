
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


// Shorcout para crear functional component: rafc 
export const GifExpertApp = () => {

  //Creamos un Hook que crea las categorias en un arreglo 
  const [categories, setCategories] = useState(['One Punch']);

  //Hace una copia de las categorias y agrego un nuevo elemento
  const onAddCategory = (newCategory) => {

    //Si el new category existe en el arreglo no hace nada
    if (categories.includes(newCategory)) return;
    // Si no existe lo inserta
    setCategories([newCategory, ...categories]);

  }

  return (
    <>

      
      <h1>GifExpertApp</h1>
     
      <AddCategory

        //En la propiedad onNewCategory se obtiene su valor y se agrega a la lista de categorias
        onNewCategory={(value) => onAddCategory(value)}

      />
      
      {
        //Order List de las categorias
        //Se obitiene las categorias
        categories.map((category) => (
            <GifGrid 
              key={ category } 
              category={ category } 
            />
        ))
      }
  
    </>
  )
}








