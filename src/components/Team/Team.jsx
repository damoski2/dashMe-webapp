import React, { useEffect } from "react";
import style from "./Team.module.css";
import cx from 'classnames';
import Aos from 'aos';
import "aos/dist/aos.css";

const Team = () => {

  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })

  const johnImage =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603550705/IMG_20200131_180044_ghclfz.jpg";
  const benImg =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603404381/Osemwengie_Benjamin_t43xmn.svg";
  const steveImg =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603549714/88060062_541509450051296_3902749241851772928_o.jpg_igynbk.jpg";
  const damImg =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603404387/Damola_ki87ks.svg";

  return (
    <section id="team" className={style.container}>
      <div className={style.team}>
        <h1>Meet the team behind the project</h1>
        <div className={style.rowCard}>
          <div data-aos={'flip-right'} className={style.col}>
            <p className={style.para}>
              The idea for dash me came in 2016 from some problems I noticed
              didn't have a solution locally but the skill, team and financial
              resources required to build the app weren't available. In 2020 I
              was privileged to join the team at Ramption to make the project a
              reality.
            </p>
            <div className={style.col_div}>
              <img
                src={johnImage}
                className={style.johnImage}
                alt="John image"
              />
              <div>
                <h4>John Taiwo</h4>
                <p>Research Analyst and App Founder</p>
              </div>
            </div>
          </div>
          <div data-aos={'flip-left'} className={style.col}>
            <p className={style.para}>
              As the lead designer of the team, constantly at the watchtower to
              improve creativity and skills, I took the task of designing the
              Dash Me app. From Wireframes, Designs to Prototype
            </p>
            <div className={cx(style.col_div,style.benCol)} >
              <img src={benImg} alt="Ben Image" />
              <div>
                <h4>Osemwengie Benjamin</h4>
                <p>Lead Designer and Research Analyst- Rampion</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.rowCard_2}>
          <div data-aos={'flip-up'} className={style.col}>
            <p className={style.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              magni quasi dolorem sunt exercitationem accusamus id laborum nemo
              animi beatae inventore,
            </p>
            <div className={cx(style.col_div,style.SteveCol)}>
              <img
                src={steveImg}
                className={style.steveImg}
                alt="Steven image"
              />
              <div>
                <h4>Steven Dozie</h4>
                <p>Ionic and Python Developer - Rampion</p>
              </div>
            </div>
          </div>
          <div data-aos={'flip-down'}  className={style.col}>
            <p className={style.para}>
              I helped in the development path using a strong development
              experience with Node js and Express. It was challenging at first,
              But it all worked out in the End.
            </p>
            <div className={cx(style.col_div,style.DamCol)}>
              <img src={damImg} alt="Damola image" />
              <div>
                <h4>Oyindamola Akogun</h4>
                <p>Javascript Engineer- Rampion </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
