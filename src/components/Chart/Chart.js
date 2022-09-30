import React from 'react'
import CharBar from './CharBar';

const Chart = props => {
    const dataPValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPValues)
    console.log(totalMax)
  return (
    <div className='my-4 w-full max-w-full bg-slate-100 rounded-md p-8 gap-2 md:gap-4 flex-wrap flex justify-around'>
        {props.dataPoints.map(dataPoint => <CharBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label}/>)}
    </div>
  )
}

export default Chart;