
import '../styles.css';
import { useFetchGifs } from '../hooks/useFetchGifs.js';
import { AnimateSpinner, GifItem } from '../components'; 

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category ); 

  
  return (
    <>
      <h3>{ category }</h3> 

      {
        isLoading && (<AnimateSpinner/ >)
      }
      <div className='card-grid'>
      {
        images.map( ( image ) => (
          <GifItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
      
    </>
  )
}
