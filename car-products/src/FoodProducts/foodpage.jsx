import React from "react";
import './foodpage.css'
// import search from '/images/search.png'
// import location from '/images/location.png'
// import dining from '/images/dining.png'
// import dining1 from '/images/searchicon.png'
// import dining2 from '/images/dining2.png'
// import dining3 from '/images/dining3.png'
// import dining4 from '/images/dining4.png'
// import dining5 from '/images/dining5.png'
// import dining6 from '/images/dining6.png'
// import dining7 from '/images/dining7.png'
// import frame from './images/Frame2.svg'
// import card from '/images/Frame4.svg'
// import home from '/images/key.png'
// import profile from '/images/profileavatar.png'



const food=()=>{
    return(
        <>
        <div className="f-main">
            <div className="main-1">
            <div className="search">
            <img src={search} alt="" />
            <img src={location} alt="" />
            </div>
            <div className="opp">
            <div className="dinnings"><img src={dining} alt="" /></div>
            <div className="dinnings"><img src={dining1} alt="" /></div>
            <div className="dinnings"><img src={dining2} alt="" /></div>
            <div className="dinnings"><img src={dining3} alt="" /></div>
            <div className="dinnings"><img src={dining4} alt="" /></div>
            <div className="dinnings"><img src={dining5} alt="" /></div>
            <div className="dinnings"><img src={dining6} alt="" /></div>
            <div className="dinnings"><img src={dining7} alt="" /></div>
            </div>
            <div className="f-card">
                {/* <div className="bann"><img src={frame} alt="" /></div> */}
            </div>
            <div className="g-card">
                <div className="cards">
                    <div className="card"><img src={card} alt="" /></div>
                    <div className="card"><img src={card} alt="" /></div>
                    <div className="card"><img src={card} alt="" /></div>
                    <div className="card"><img src={card} alt="" /></div>
                    <div className="card"><img src={card} alt="" /></div>
                    <div className="card"><img src={card} alt="" /></div>
                </div>
            </div>
            <div className="down">
                <div className="opp"><img src={scanner} alt="" /></div>
                <div className="opp"><img src={home} alt="" /></div>
                <div className="opp"><img src={profile} alt="" /></div>
            </div>
            </div>
        </div>
        </>
    )
}
export default food;