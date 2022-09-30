import React from 'react'

const CharBar = props => {
    let barFill =  props.maxValue > 0 ? Math.round((props.value/props.maxValue) * 100) + '%' : '0%';
console.log(props.maxValue)
  return (
    <div className='chart-bar flex flex-col'>
        <div className='chart-bar_inner overflow-hidden bg-slate-200 relative h-32 md:h-72 w-4 md:w-6 lg:w-8 rounded-md border-slate-800'>
            <div className='chart-bar_fill hover:h-full transition-all duration-1000 w-full absolute bottom-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500' style={{height: barFill}}></div>
        </div>
        <div className='chart-bar_label text-center text-bolder'>{props.label}</div>
    </div>
  )
}

export default CharBar