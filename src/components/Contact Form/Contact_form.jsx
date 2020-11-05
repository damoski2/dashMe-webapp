/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import style from "./Contact_form.module.css";
//import axios from 'axios';
import { connect } from 'react-redux';
import { postForm } from '../../actions/postContact';
import  Backdrops  from '../Backdrops/Backdrops';

const Contact_form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const resetForm = ()=>{
      setName("");
      setEmail("");
      setMessage("");
  }  

  const submitForm = async(e)=>{
    e.preventDefault();

    const form = {
        name: name,
        email: email,
        message: message
    }
    props.postForm(form)
    //alert(props.contact_post);
    resetForm();
  }  


  return (
    <section className={style.container} style={{display: props.contact? 'block':'none' }} >
      <div className={style.form}>
        <form onSubmit={submitForm} className={style.actualForm}>
          <div className={style.formDetails}>
            <h1>Need to contact us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              similique!
            </p>
          </div>
          <div className={style.formInputs} >
            <input value={name} onChange={e=>setName(e.target.value)} type="text" name="name" placeholder="name" />
            <input value={email} onChange={e=> setEmail(e.target.value)} type="text" name="email" placeholder="email" />
            <textarea value={message} onChange={e=> setMessage(e.target.value)} name="message" placeholder="message"></textarea>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

const mapStateToProps = state =>({
    contact_post: state.contact_post.message,
    contact: state.contact_btn.show_contact
})

export default connect(mapStateToProps, { postForm })(Contact_form);
