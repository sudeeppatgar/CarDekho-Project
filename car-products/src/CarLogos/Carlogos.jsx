import React, { useState } from "react";
import './Carlogos.css'

const logoData={
    current:[
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg",
        "name":"Maruti",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg",
        "name":"Tata",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/kia.jpg",
        "name":"Kai",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg",
        "name":"Toyota",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg",
        "name":"Hyundai",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg",
        "name":"Mahindra",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/honda.jpg",
        "name":"Honda",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mg.jpg",
        "name":"MG",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/skoda.jpg",
        "name":"Skoda",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/jeep.jpg",
        "name":"Jeep",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/renault.jpg",
        "name":"Renault",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/nissan.jpg",
        "name":"nissan",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/volkswagen.jpg",
        "name":"Volkswagen",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/citroen.jpg",
        "name":"Citroen",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/aston-martin.jpg",
        "name":"Aston Martin",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/audi.jpg",
        "name":"Audi",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/bajaj.jpg",
        "name":"Bajaj",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/bentley.jpg",
        "name":"Bentley",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/bmw.jpg",
        "name":"BMW",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/byd.jpg",
        "name":"BYD",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/ferrari.jpg",
        "name":"Ferrari",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/force.jpg",
        "name":"Force",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/isuzu.jpg",
        "name":"Isuzu",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/jaguar.jpg",
        "name":"Jaguar",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/lamborghini.jpg",
        "name":"Lamborghini",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/land-rover.jpg",
        "name":"Land Rover",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/lexus.jpg",
        "name":"Lexus",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/lotus.jpg",
        "name":"Lotus",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maserati.jpg",
        "name":"Maserati",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mclaren.jpg",
        "name":"Mclaren",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mercedes-benz.jpg",
        "name":"Mercedes-Benz",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mini.jpg",
        "name":"Mini",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/pmv.jpg",
        "name":"PMV",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/porsche.jpg",
        "name":"Porsche",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/pravaig.jpg",
        "name":"Pravaig",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/rolls-royce.jpg",
        "name":"Rolls-Royce",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/strom-motors.jpg",
        "name":"Strom Motors",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/vayve-mobility.jpg",
        "name":"Vayve-Mobility",
    },
    {   
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/volvo.jpg",
        "name":"Volvo",
    },
],
Upcoming:[
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/haval.jpg",
        "name":"Haval",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/koenigsegg.jpg",
        "name":"Koenigsegg",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mean-metal.jpg",
        "name":"Mean-metal",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/xiaomi.jpg",
        "name":"Xiaomi",
    },
],
Expired:[
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/abarth.jpg",
        "name":"Abarth",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/ashok-leyland.jpg",
        "name":"Ashok Leyland",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/austin.jpg",
        "name":"Austin",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/cadillac.jpg",
        "name":"Cadillac",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/caterham.jpg",
        "name":"Caterham",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/chevrolet.jpg",
        "name":"Chevrolet",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/chrysler.jpg",
        "name":"Chrysler",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/conquest.jpg",
        "name":"Conquest",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/daewoo.jpg",
        "name":"Daewoo",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/datsun.jpg",
        "name":"Datsun",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/dc.jpg",
        "name":"DC",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/dodge.jpg",
        "name":"Dodge",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/fiat.jpg",
        "name":"Fiat",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hindustan-motors.jpg",
        "name":"Hindustan Motors",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hummer.jpg",
        "name":"Hummer",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/icml.jpg",
        "name":"ICML",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/infiniti.jpg",
        "name":"Infiniti",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra-renault.jpg",
        "name":"Mahindra Renault",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra-ssangyong.jpg",
        "name":"Mahindra-Ssangyong",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maybach.jpg",
        "name":"Maybach",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mazda.jpg",
        "name":"mazda",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/morris.jpg",
        "name":"Morris",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/noimage.svg",
        "name":"Nexa",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/opel.jpg",
        "name":"Opel",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/piaggio.jpg",
        "name":"Piaggio",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/premier.jpg",
        "name":"Premier",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/reva.jpg",
        "name":"Reva",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/san-motors.jpg",
        "name":"San Motors",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/sipani.jpg",
        "name":"Sipani",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/smart.jpg",
        "name":"Smart",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/studebaker.jpg",
        "name":"Studebaker",
    },
    {
        "src":"https://stimg.cardekho.com/pwa/img/brandLogo_168x84/subaru.jpg",
        "name":"Subaru",
    },

]
}

const Logo=()=>{
    const [selectedType, setSelectedType] = useState("current");
    return(
        <>
        <div className="logo-container">
            <div className="logo-head">
                <h2>Explore New Cars By Brand</h2>
                <div className="l-tag">
                {Object.keys(logoData).map((type) => (
                  <button
                    key={type}
                    className={selectedType === type ? "active" : ""}
                    onClick={() => setSelectedType(type)}>
                    {type}
                  </button>
                ))}
                </div>
            </div>
            <div className="logo-body">
            <div className="logo-items">
                {logoData[selectedType].map((car, index) => (
                    // <Slider {...settings}>
                  <div key={index}  className="logo">
                    <img src={car.src} alt={car.name} />
                    <p>{car.name}</p>
                  </div>
                    // </Slider>
                ))}
            </div>
            </div>
        </div>
            </>
    )
}
export default Logo;