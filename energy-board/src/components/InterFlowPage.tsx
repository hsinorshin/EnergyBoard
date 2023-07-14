import { useEffect, useState } from "react";
import { InterFlowsPageData, emptyIFPD } from "../models/InterFlowsPageData";
import { BarChart } from "./BarChart";
import Slider from '@mui/material/Slider';
import { updateInterval } from "../helpers/dateTimeFuncs";
import { interFlowsToPageData } from "../mappers/interFlowsToPageData";
import { getValue } from "@mui/system";

export function InterFlowPage() {
    const [interFlowD, setInterFlowD] = useState(structuredClone(emptyIFPD));
    const [interFlowPeriod, setInterFlowPeriod] = useState(-1);

    useEffect(() => { interFlowsToPageData(interFlowPeriod).then(i => setInterFlowD(i));
        const interval = setInterval(() => {interFlowsToPageData(interFlowPeriod).then(i => setInterFlowD(i));}, updateInterval);
        return () => clearInterval(interval);  
      }, []);

    return (<div>
                <BarChart bcd={interFlowD.barChartData}/>
                <Slider value={interFlowD.showPeriod} step={1} marks min={interFlowD.minPeriod} max={interFlowD.maxPeriod} color="secondary" onChange={(_, value) => 
                                                                                                                                                        {if (typeof value === "number") {
                                                                                                                                                            setInterFlowPeriod(value);
                                                                                                                                                         } else {
                                                                                                                                                            setInterFlowPeriod(value[0]);
                                                                                                                                                         }  
                                                                                                                                                         interFlowsToPageData(interFlowPeriod).then(i => setInterFlowD(i));                                                                                                                                                      
                                                                                                                                                        }}/>
            </div>
    );
}

