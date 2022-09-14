
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  console.log({isLoading});

  return (
      <>
          <h3>{ category }</h3>
          
          {
              isLoading && (<h2>Cargando...</h2>)              
          }

          <div className="card-grid">
            
            {
              //El map imprime todas las imagenes del la peticion API guardadas en el arreglo
              images.map( ( image ) => (
                <GifItem 
                  key={ image.id }
                  //Todas las props que venga en el image las esparce
                  { ...image }
                />
              ))
            }
            
          </div>

      </>
  )

}
