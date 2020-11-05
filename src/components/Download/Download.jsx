import React, { useEffect } from 'react';
import style from './Download.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";

 const Download = () => {

    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    })

     const downloadImg = "https://res.cloudinary.com/oyindacodes/image/upload/v1603404359/DashMePhone_digplu.svg";
     const appStoreImg = "https://res.cloudinary.com/oyindacodes/image/upload/v1603404325/Apple_Store_qoxffd.svg";
     const playStoreImg = "https://res.cloudinary.com/oyindacodes/image/upload/v1603404325/Google_Play_kuvwvf.svg";
    return (
        <section className={style.container}>
            <div className={style.download}>
                <div data-aos={'fade-right'} className={style.download_details}>
                    <h1>Download The App</h1>
                    <h4>Out Soon for Mobile Devices</h4>
                    <div className={style.appStores}>
                        <img className={style.appStoreImg} src={playStoreImg} alt="appStoreImg" />
                        <img className={style.playStoreImg} src={playStoreImg} alt="playStoreImg" />
                    </div>
                </div>
                <img data-aos={'fade-left'} className={style.downloadImg} src={downloadImg} alt="download Image" />
            </div>
        </section>
    )
}

export default Download
