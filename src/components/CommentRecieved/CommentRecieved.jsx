import React, { Component } from 'react';
import style from "./CommentRecieved.module.css";
import { connect } from 'react-redux';
import axios from 'axios';
import '../FontawesomeIcons/FontawesomeIcons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { fetchComment } from '../../actions/commentAction'

 class CommentRecieved extends Component {
 
   componentWillMount(){
    this.props.fetchComment();
   }

  /* componentWillReceiveProps(nextProps){
      if(nextProps.newComment){
        this.props.comments.unshift(nextProps.newComment);
      }
   }*/

  render() {
    const userIcon = 'https://res.cloudinary.com/oyindacodes/image/upload/v1603404423/User_Icon_eygxsh.svg'
    return (
      <section className={style.container}>
        <div className={style.comment}>
          <h2>Comments: </h2>
          {this.props.comments.map((comment,index) =>(
            <div key={index}  className={style.actualComments}>
              <img src={userIcon} alt="user Icon" className={style.userIcon} />
              <p>{comment}</p>
              {/*
              <input type="button" value="delete" />
              <input type="button" value="edit" />
              */}
            </div>
          ))}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state=>({
  comments: state.comment.comments,
  newComment: state.comment.singleComment
})

export default connect(mapStateToProps, { fetchComment })(CommentRecieved)
