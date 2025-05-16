import React from 'react'
import { Button } from '@mui/material'

export default function ProductBox({name,image,price} : {name: string,image: string,price: number}) {
    return (
        <div className="flex flex-col w-full h-[400px] text-white rounded-[20px] p-4  shadow-md 
        bg-[#1d1d3e]">

            <img src="https://via.placeholder.com/300x200" alt="product" className="w-full h-[200px] object-cover rounded-[15px]" />
            <h1 className="text-lg font-semibold mt-4 text-right">عنوان محصول</h1>
            <div className="mt-auto flex justify-between items-center pt-4">
                <span className="text-green-600 font-bold">250,000 تومان</span>
                <Button sx={{fontFamily: 'iran-yekan', backgroundColor: 'rgb(33, 150, 243)'}} variant='contained' className='w-[100px] px-4 py-1'>خرید</Button>
            </div>
        </div>

    )
}
