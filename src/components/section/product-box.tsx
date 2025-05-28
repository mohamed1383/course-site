import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { myContex } from "../../app.jsx";

export default function ProductBox({ name, image, price }: { name?: string, image?: string, price?: number }) {
    const [pageTheme] = useContext(myContex);

    return (
        <div className={`flex flex-col w-full h-[400px] rounded-[20px] p-4 shadow-md 
                         transform hover:scale-110 duration-300
                         ${pageTheme === "light"
                ? "bg-white text-gray-800 border border-[#e0e7ff]"
                : "bg-[#1d1d3e] text-white"}`}>

            <img src="https://via.placeholder.com/300x200" alt="product" className="w-full h-[200px] object-cover rounded-[15px]" />
            <h1 className="text-lg font-semibold mt-4 text-right">عنوان محصول</h1>
            <div className="mt-auto flex justify-between items-center pt-4">
                <span className={`font-bold ${pageTheme === "light" ? "text-green-700" : "text-green-600"}`}>250,000 تومان</span>
                <Button
                    sx={{
                        fontFamily: 'iran-yekan',
                        zIndex: '2',
                        backgroundColor: pageTheme === "light" ? 'rgb(25, 118, 210)' : 'rgb(33, 150, 243)'
                    }}
                    variant='contained'
                    className='w-[100px] px-4 py-1'
                >
                    خرید
                </Button>
            </div>
        </div>
    )
}
