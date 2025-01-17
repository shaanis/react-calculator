import React, { useState } from 'react'

const Calculator = () => {
    const [value, setValue]=useState("")
    const displayNumber=(number)=>{
        setValue(value + number)
    }
    const clearAll=()=>{
        setValue("")
    }
    const calculateNumber=()=>{
        setValue(eval(value).toString())
    }
    const deleteLast =()=>{
        setValue(value.slice(0, -1))
    }
  return (
    <div className='flex justify-center items-center min-h-screen bg-orange-500'>
          <div style={{width:'400px',height:'560px'}} className='border   bg-white rounded'>
            <div className='p-2'><input value={value} type="text" readOnly className='shadow-md w-full text-right text-3xl p-2 h-24 rounded bg-green-950 text-white font-bold' /></div>
            <div className='p-3 grid grid-cols-4 gap-1'>
            <button onClick={clearAll} className='col-span-2 bg-blue-200 h-20rounded'>AC</button>
            <button onClick={deleteLast}   className='bg-blue-200 h-20 rounded'>DEL</button>
            <button onClick={()=>displayNumber("/")} className=' bg-blue-200 h-20 rounded'>/</button>
            <button onClick={()=>displayNumber("7")}  className=' bg-blue-200 h-20 rounded'>7</button>
            <button onClick={()=>displayNumber("8")} className=' bg-blue-200 h-20 rounded'>8</button>
            <button onClick={()=>displayNumber("9")} className=' bg-blue-200 h-20 rounded'>9</button>
            <button onClick={()=>displayNumber("*")} className=' bg-blue-200 h-20 rounded'>*</button>
            <button onClick={()=>displayNumber("4")} className=' bg-blue-200 h-20 rounded'>4</button>
            <button onClick={()=>displayNumber("5")} className=' bg-blue-200 h-20 rounded'>5</button>
            <button onClick={()=>displayNumber("6")} className=' bg-blue-200 h-20 rounded'>6</button>
            <button onClick={()=>displayNumber("+")} className=' bg-blue-200 h-20 rounded'>+</button>
            <button onClick={()=>displayNumber("1")} className=' bg-blue-200 h-20 rounded'>1</button>
            <button onClick={()=>displayNumber("2")} className=' bg-blue-200 h-20 rounded'>2</button>
            <button onClick={()=>displayNumber("3")} className=' bg-blue-200 h-20 rounded'>3</button>
            <button onClick={()=>displayNumber("-")} className=' bg-blue-200 h-20 rounded'>-</button>
            <button onClick={()=>displayNumber("0")} className=' bg-blue-200 h-20 rounded '>0</button>
            <button onClick={()=>displayNumber(".")} className=' bg-blue-200 h-20 rounded'>.</button>
            <button onClick={calculateNumber} className=' bg-blue-200 h-20 rounded col-span-2'>=</button>
            
           
            </div>
            
          </div>
    </div>
  )
}

export default Calculator