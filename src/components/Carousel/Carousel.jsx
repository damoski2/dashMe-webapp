import React, { useEffect, useState } from 'react';
import style from './Carousel.module.css';
import Aos from 'aos';
import Lottie from 'react-lottie';
import bgAnimate from '../../lotties/36287-ballons-flying-up.json';
import "aos/dist/aos.css";
 
const Carousel=()=>{

    /*const [stop,setStop] = useState(false);
    const [paused, setPaused] = useState(false);

    const playAll =()=>{
        setPaused(false);
        setStop(false)
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bgAnimate,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const buttonStyle = {
        display: 'inline-block',
        margin: '10px auto',
        marginRight: '10px',
        border: 'none',
        color: 'white',
        backgroundColor: '#647DFF',
        borderRadius: '2px',
        fontSize: '15px'
  
      };*/

   
  useEffect(()=>{
      Aos.init({
          duration:2000
      })
  })

    const icon = "https://res.cloudinary.com/oyindacodes/image/upload/v1603404325/Logo_Dash_Me._jetz63.svg";
    const ellipse ="https://res.cloudinary.com/oyindacodes/image/upload/v1603404446/Ellipse_ucu0ft.svg";
    //const bgAnimate = "https://assets6.lottiefiles.com/packages/lf20_u2qcwsq0.json";

    /*const bckG = (
        <Lottie options={defaultOptions}
        height={500}
        width={1400}
        isStopped = {stop}
        isPaused = {paused}
    />
    );*/
     


    return (
        <section className={style.container}>
        {/* <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={stop}
              isPaused={paused}
        />
        <button onClick={()=>setStop(true)} style={buttonStyle}>Stop</button>
        <button onClick={()=>playAll()} style={buttonStyle}>Play</button>
        <button onClick={()=>setPaused(!paused)} style={buttonStyle}>Pause</button>
        */}
            <div className={style.carousel}>
                <img src={icon} alt="dashMe_icon" />
                <h3>Your New App is Here</h3>
                <h1>Giveaway<span><img className={style.word_dot} src={ellipse} alt="ellipse_dot" /></span>{" "}Exchange<span><img className={style.word_dot} src={ellipse} alt="ellipse_dot" /></span>{" "}Sell</h1>
                <img className={style.fI_dot} src={ellipse} alt="dot" />
                <img className={style.s_dot} src={ellipse} alt="dot" />
                <img className={style.t_dot} src={ellipse} alt="dot" />
                <img className={style.fO_dot} src={ellipse} alt="dot" />
            </div>
        </section>
    )
}

export default Carousel