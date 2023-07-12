import { getFuelTypes } from "../repository/repository";



export const FuelTypeList = () => {
 const handleClick = () =>{
    getFuelTypes();
  }

  return (<>
  <button className='button' onClick={handleClick}>
          Click Me
        </button>
  </>)
  
}

