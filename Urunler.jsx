import KrediKart from "./DevamBn";

function UrunlerListesi({item, ekran}){

    const handleDevamEt = () =>{
        ekran(false)
    }

    
    const toplamWage = item.reduce((toplam, urun) => toplam + urun.wage, 0);
    const formatliToplamWage = toplamWage.toLocaleString({ style: 'currency', currency: 'TRY' });
    console.log(toplamWage);

    return(
        <div className="urunler">
            <button className="geriBtn" onClick={handleDevamEt}><span className="material-symbols-outlined">arrow_back_ios_new</span>Alışverişe Devam Et</button>
            <h2 className="h2">SEPET TUTARI: {formatliToplamWage} TL</h2>
            <div className="urunler-kart">

            {item.map((count) =>(
                <div className="kart" key={count.id}>
                    <img src={count.image} alt="resim" />
                    <p>{count.title}</p>
                    <h2>{count.wage}TL</h2>
                </div>
            ))}
            </div>
            <div className="kart-btn">
            <button className="devamBtn">ALIŞVERİŞİ TAMAMLA <span class="material-symbols-outlined">double_arrow</span></button>
            </div>
            <KrediKart />
        </div>
    )
}

export default UrunlerListesi;