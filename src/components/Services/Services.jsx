/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{ useEffect } from 'react';
import style from './Services.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function Services() {

    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    })

    const giveAwayImg = "https://res.cloudinary.com/oyindacodes/image/upload/v1603480420/Gift_Icon2.0_jyuc8b.svg";
    const sellCheaplyImg = "https://res.cloudinary.com/oyindacodes/image/upload/v1603480420/Coin_Icon2.0_itvzjs.svg"
    const exchangeImg ="https://res.cloudinary.com/oyindacodes/image/upload/v1603404423/Exchange_Icon_mawzde.svg";
    return (
        <section id="help" className={style.container}>
            <div className={style.services}>
                <h2>What You can do with our Product</h2>
                <div className={style.rowCards}>
                    <div className={style.col} data-aos={'fade-down'} >
                        <img className={style.giveImg} src={giveAwayImg} alt="give away image" />
                        <h4>Giveaway</h4>
                        <p>Yo can giveaway products, valuables and appliances you dont'n need or you would like to give out.</p>
                    </div>
                    <div className={style.col2} data-aos={'fade-up'} >
                        <img className={style.exImg} src={exchangeImg} alt="exchange image" />
                        <h4>Exchange</h4>
                        <p>Exchange goods and services for other goods and services, without using a medium of exchange, such as money.</p>
                    </div>
                    <div className={style.col} data-aos={'fade-down'} >
                        <img className={style.sellImg} src={sellCheaplyImg} alt="sell cheaply" />
                        <h4>Sell Cheaply</h4>
                        <p>Sell  your goods and services at a low cost of price to people around you. Up to 80% discount prices.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
