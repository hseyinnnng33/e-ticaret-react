import { useState } from "react";
import List from "./components/List";
import Header from "./components/Header";
import Genel from "./components/Genel";

const urunler = [
  {
      title: "Apple Macbook",
      wage: 10000,
      id: 1,
      image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/114754-1-2_large.jpg"
  },
  {
      title: "İphone 11",
      wage: 20000,
      id: 2,
      image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113144-1-1_large.jpg"
  },
  {
      title: "Apple Watch",
      wage: 5000,
      id: 3,
      image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/135218-1-1_large.jpg"
  },
  {
      title: "LG 65UP7710 65inc 164 cm 4K",
      wage: 40000,
      id: 4,
      image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lg/thumb/137070-1_large.jpg"
  },
  {
    title: "Excalibur Notebook",
    wage: 40000,
    id: 5,
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/casper/thumb/135717-1_large.jpg"
},
{
    title: "Samsung Galaxy Z Flip",
    wage: 30000,
    id: 6,
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/134763-1_large.jpg"
},
{
    title: "İphone 15",
    wage: 55000,
    id: 7,
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/135195-4-4_large.jpg"
},
{
    title: "SAMSUNG GALAXY WATCH",
    wage: 22000,
    id: 8,
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/129601_large.jpg"
},
]


function App() {
  
  const [dataveri, setDataVeri] = useState(urunler)

  

  return (
    <div className="App">
      <Genel veri = {dataveri} />
    </div>
  );
}

export default App;
