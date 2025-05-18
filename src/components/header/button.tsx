import React, { MouseEventHandler } from 'react'

export default function Button({Icon, clickHandler = () => {} } : {Icon: React.ElementType, clickHandler?: MouseEventHandler}) {

  return (
    <div  
      className='cursor-pointer p-1 hover:opacity-80'
      style={{cursor: 'pointer'}}
      onClick={() => clickHandler()}
    >
       <Icon className="w-7 h-7 cursor-pointer" style={{cursor: 'pointer'}}></Icon> 
    </div>
  )
}
