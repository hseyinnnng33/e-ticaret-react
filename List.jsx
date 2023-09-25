import { useState } from "react";

function List({veri, veritut, sayi, gonder}){

    const [tiklanan, setTiklanan] = useState(1)

    const handleClick = (item) =>{
        veritut(item)
        gonder(item)
        
        // console.log(item);
    }

    const artBtn = () =>{
        setTiklanan(tiklanan + 1)
        sayi(tiklanan)
    }

    function randomSayi(){
        return Math.random() * 1;
    }

    return(
        <div className="listeler">
            <h2 className="h2">PATRON ÇILDIRDI (UCUZMUŞ GİBİ DAVRANIN)</h2>
            <div className="kartlar">
        {veri.map((item) =>(
            <div className="kart" key={item.id}>
                <img src={item.image} alt="resim" />
                <p>{item.title}</p>
                <h2>{item.wage} TL</h2>
                <button className="alBtn" onClick={() =>{
                    handleClick(item)
                    artBtn() 
                }
             }>
            <span style={{margin: "5px"}} className="material-symbols-outlined">shopping_cart</span>Sepete Ekle</button>
                <button style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    padding: "5px 20px",
                    backgroundColor: "greenyellow",
                    fontWeight: "bold",
                    fontSize: "17px",
                    cursor: "pointer",
                    width: "100%"
                }}>
                <span style={{margin: "5px"}} className="material-symbols-outlined">local_shipping</span>Kargo Bedava</button>
            </div>
        ))}
        </div>
        </div>
    )
}

export default List;