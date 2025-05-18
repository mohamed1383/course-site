import React, { useContext } from "react";
import ProductBox from "./product-box";
import { useMediaQuery } from "react-responsive";
import { myContex } from "../../app.jsx";
import { Link } from "react-router-dom";

export default function ProductContainer() {
    const [pageTheme] = useContext(myContex);

    const isSize1 = useMediaQuery({ query: "(min-width: 1500px)" });
    const isSize2 = useMediaQuery({ query: "(min-width: 1259px)" });
    const isSize3 = useMediaQuery({ query: "(min-width: 640px)" });

    return (
        <div
            style={{
                backgroundImage: pageTheme === "light"
                    ? 'linear-gradient(178.1deg, #f0f4ff 8.5%, #e6e9ff 82.4%)'
                    : 'linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)'
            }}
            className={`w-full min-h-screen grid gap-8 p-4 md:px-20 lg:px-40
                ${isSize1 ? 'grid-cols-4' : isSize2 ? 'grid-cols-3' : isSize3 ? 'grid-cols-2' : 'grid-cols-1'}`}
        >
            <Link to='course'>
                <ProductBox />
            </Link>
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
        </div>
    );
}
