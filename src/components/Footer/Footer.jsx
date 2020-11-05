import React from 'react';
import style from './Footer.module.css';
import { connect } from 'react-redux';
import { ToggleContact } from '../../actions/toggleContact';

 const Footer = (props) => {
     const rampionImg = "https://res.cloudinary.com/oyindacodes/image/upload/v1603404325/RampLogo_yol3at.svg";
    return (
        <section className={style.container}>
            <div className={style.footer}>
                <img className={style.rampionImg} src={rampionImg} alt="Rampion Logo" />
                <button onClick={props.ToggleContact} >Contact Us</button>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    contact: state.contact_btn.show_contact
})


export default connect( mapStateToProps, { ToggleContact } )(Footer)
