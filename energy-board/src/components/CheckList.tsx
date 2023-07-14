
interface Props {
    setChartsFunction: React.Dispatch<React.SetStateAction<string[]>>;
    checkList: Array<string>;
}
export const CheckList =({setChartsFunction, checkList} :Props) => {
    var chartList:string[]=[];
    return(
        <>
        {checkList.length>0 && 
            checkList.map(item =>  
                <span>
                 <input type="checkbox" id={item} name={item} value={item} onChange={(e)=> {
                    let element  =  document.getElementById(item) as HTMLInputElement; 
                    if(element.checked){
                        chartList.push(item)
                    }
                    else{
                        console.log(item, chartList);
                        if (chartList.includes(item)){
                            var i= chartList.indexOf(item);
                            chartList=chartList.splice(i,1)
                        }
                    }

                    console.log(chartList);
                    
                    
                    setChartsFunction(chartList)}}/>
                <label htmlFor={item}> {item}</label><br></br>
                </span>

            )
        
        }
        </>
    )
}