import React, { useState } from "react";
import style from "./CommentSection.module.css";
import { connect } from 'react-redux';
import axios from 'axios';
import { postComment } from '../../actions/commentAction';


const CommentSection = (props) => {

    const [comment, setComment] = useState('');

    const clearInputs = (e)=>{
        e.preventDefault();
        setComment('');
    }

    const submitComment =(e)=>{
        e.preventDefault();
        const commented = {
            comment:comment
        }
        props.postComment(commented);
        setTimeout(()=>{
          window.location.reload();
        },3000)
    }

  return (
    <section className={style.container}>
      <div className={style.comment}>
        <h1>Drop a Comment</h1>
        <form onSubmit={submitComment} className={style.inputs}>
          <input type="text" name="comment" placeholder="Drop a comment" value={comment} onChange={e=> setComment(e.target.value)} />
          <br></br>
          <div className={style.buttons}>
            <input style={{background: comment? '#0ecaa7':'rgba(196, 196, 185, 0.867)', color: comment? '#fff': 'rgb(59, 58, 58)'}} type="submit" value="Comment" />
            <button onClick={clearInputs}>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
};


export default connect( null, { postComment } )(CommentSection);
