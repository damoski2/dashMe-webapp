import { POST_COMMENT, FETCH_COMMENT } from './commentTypes';
import axios from 'axios';

export const fetchComment =()=> dispatch =>{
    axios.get('https://dashme-server.herokuapp.com/comment/')
    .then(res => {
      if(res.data.length>0){
        dispatch({
            type: FETCH_COMMENT,
            payload : res.data.map(user => user.comment)
        })
      }
    })
}


export const postComment = (postData)=> dispatch=>{
  axios.post('https://dashme-server.herokuapp.com/comment/add',postData)
    .then(res => dispatch({
      type: POST_COMMENT,
      payload: res.data
    }))
}