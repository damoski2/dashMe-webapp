import React from 'react';
import './Backdrops_contact.css';   
import { connect } from 'react-redux';
import { ToggleContact } from '../../actions/toggleContact';

 const Backdrops = (props) => {
    return (
        <div style={{display: props.contact? 'block':'none' }} className="backdrop" onClick={props.ToggleContact}></div>
    )
}

const mapStateToProps = state =>({
    contact: state.contact_btn.show_contact
})

export default connect(mapStateToProps, { ToggleContact })(Backdrops)