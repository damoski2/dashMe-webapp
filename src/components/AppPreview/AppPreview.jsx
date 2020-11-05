import React, { useEffect } from "react";
import style from "./AppPreview.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AppPreview() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });

  const giftImg =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603404406/Gift_Icon_ru9alu.svg";
  const sellImg =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603404406/Sell_Icon_kdan68.svg";
  const ellipse =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603404446/Ellipse_ucu0ft.svg";
  const dashOutPhone =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603404357/DashOutPhone_yieem2.svg";

  const dottedImg =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603404446/Dotted_Circle_ccl4zz.svg";
  return (
    <section className={style.container}>
      <div className={style.previews}>
        <img
        data-aos={"fade-down"}
          className={style.giftImage}
          src={giftImg}
          alt="gift_image"
        />
        <img
          data-aos={"fade-up"}
          className={style.phoneImg}
          src={dashOutPhone}
          alt="dash_Out_Phone"
        />
        <img data-aos={"fade-down"} className={style.sellImage} src={sellImg} alt="Sell_image" />
      </div>
      <div className={style.dotsStyle}>
        <img className={style.fI_dot} src={ellipse} alt="dot" />
        <img className={style.s_dot} src={ellipse} alt="dot" />
        <img className={style.t_dot} src={ellipse} alt="dot" />
        <img className={style.fO_dot} src={ellipse} alt="dot" />
      </div>
    </section>
  );
}
