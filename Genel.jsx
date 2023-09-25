import { useState } from "react";
import Header from "./Header";
import List from "./List";
import UrunlerListesi from "./Urunler";

function Genel({veri}){

    const [veritut, setVeriTut] = useState()
    const [sayi, setSayi] = useState()
    const [tikla, setTikla] = useState(false)
    
    const [yeni, setYeni] = useState([])

console.log(yeni);

    return(
        <div className="genel">
            <Header sayi = {sayi} tikla = {setTikla} />
            {!tikla && <List veri={veri} veritut = {setVeriTut} gonder = {(item) => setYeni([...yeni, item])} sayi = {setSayi} /> }
            {tikla && <UrunlerListesi ekran = {setTikla} item = {yeni}/>}
        </div>
    )
}

export default Genel;