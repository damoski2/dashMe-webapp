import React, { useEffect } from 'react';
import style from './Features.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";

 const Features = () => {

    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    })

    const smDesign = "https://res.cloudinary.com/oyindacodes/image/upload/v1603404423/Design_Icon_xzoaie.svg";
    const securityLogo = "https://res.cloudinary.com/oyindacodes/image/upload/v1603404423/Security_Icon_nzw7ji.svg";
    const userIcon = "https://res.cloudinary.com/oyindacodes/image/upload/v1603404423/User_Icon_eygxsh.svg";
    const featurePhone = "https://res.cloudinary.com/oyindacodes/image/upload/v1603404358/HomeScreenPhone_m8luvw.svg";
    return (
        <section id="feature" className={style.container}>
            <div className={style.features}>
                <div data-aos={'fade-right'} className={style.feature_details}>
                    <h1>Features of the New App</h1>
                    <p className={style.Head_para}>A simple, eleghant and powerful software built with cutting edge technologies.</p>
                    <div className={style.featurepara}>
                        <div>
                            <img className={style.smDesign} src={smDesign} alt="seamless design" />
                            <span>Seamless Design</span>
                        </div>
                        <div>
                            <img className={style.userIcon} src={userIcon} alt="userIcon" />
                            <span>User friendly experience</span>
                        </div>
                        <div>
                            <img className={style.securityLogo} src={securityLogo} alt="securityLogo" />
                            <span>Maximum Security</span>
                        </div>
                    </div>    
                </div>
                <img data-aos={'fade-left'} className={style.featurePhone} src={featurePhone} alt="feature Phone" />
            </div>
        </section>
    )
}

export default Features

