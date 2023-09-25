import { useState } from "react";

function Header({sayi, tikla}){


    return(
        <div className="header">
            <div className="icerik">
            <div className="sol">
                <h2>TRİGOTER</h2>
            </div>
            <button className={sayi >= 1 ? "buyuk" : "cart-item"} onClick={() => tikla(true)}>
            <span className="material-symbols-outlined">shopping_cart</span>
            <h2 className="sayac">{sayi}</h2>
            <h1>Sepetim</h1>
            </button>
            </div>
        </div>
    )
}

export default Header;