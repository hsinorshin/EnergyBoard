import { useEffect } from "react";

interface Props {setPeriodFunction: React.Dispatch<React.SetStateAction<string>> ; valuelist: string[]}

export const DropDown = ({setPeriodFunction, valuelist} :Props) => {
    return(
        <>
        <label htmlFor="displayperiod">Usage Period : </label>
          <select defaultValue={"30min"} id="displayperiod" onChange={(e)=> {setPeriodFunction(e.target.value) ; console.log(e.target.value)}}>

          {valuelist.length>0 && valuelist.map(
        (value: string, index) =>(
          <option value={value}>{value}</option>
        )
      )} 

          </select> 
        </>
    )
}


// return(
//     <>
//     <label htmlFor="displayperiod">Usage Period : </label>
//       <select defaultValue="30min" id="displayperiod" name="displayperiod">
//         <option value="30min">Now</option>
//         <option value="24hours">Day</option>

//       </select> <p> HI {(document.getElementById("displayperiod") as HTMLInputElement).value}</p>
//     </>
// )
// }