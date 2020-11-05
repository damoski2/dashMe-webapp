import { CONTACT_POST } from './navTypes';
import axios from 'axios';

export const postForm = (postData) => async dispatch=>{
    await axios({
        method: 'POST',
        url: 'https://dashme-server.herokuapp.com/contact/send',
        data: postData,
        headers: {
            'Content-Type':'application/json'
        }
    }).then((response)=>{
        if(response.data.msg ==="success"){
            alert("message sent");
        }else if(response.data.msg ==="fail"){
            alert("message failed to send");     
        }
        dispatch({
            type: CONTACT_POST,
            payload: response.data.msg
        })
    })
   
}