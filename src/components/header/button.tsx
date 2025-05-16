import React from 'react'

export default function Button({Icon,index} : {Icon: React.ElementType,index: number}) {

  return (
    <div>

       <Icon className="w-7 h-7 cursor-pointer"></Icon> 
    </div>
  )
}
