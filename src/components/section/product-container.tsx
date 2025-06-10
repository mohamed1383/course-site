import React from "react";
import ProductBox from "./product-box";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function ProductContainer() {

    const isSize1 = useMediaQuery({ query: "(min-width: 1500px)" });
    const isSize2 = useMediaQuery({ query: "(min-width: 1259px)" });
    const isSize3 = useMediaQuery({ query: "(min-width: 640px)" });

    return (
        <div
            className={`w-full grid gap-8 p-4 md:px-20 lg:px-40
                ${isSize1 ? 'grid-cols-4' : isSize2 ? 'grid-cols-3' : isSize3 ? 'grid-cols-2' : 'grid-cols-1'}`}
        >
            <Link to='course'>
                <ProductBox />
            </Link>
           {[...Array(5)].map((item,index) => <Link key={index} to='course'><ProductBox /></Link>)}
        </div>
    );
}
