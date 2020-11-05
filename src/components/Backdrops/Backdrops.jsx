import React from 'react';
import './Backdrops.css';
import { connect } from 'react-redux';
import { ToggleNav } from '../../actions/toggleNav';

 const Backdrops = (props) => {
    return (
        <div style={{display: props.navbarHandle? 'block':'none' }} className="backdrop" onClick={props.ToggleNav}></div>
    )
}

const mapStateToProps = state =>({
    navbarHandle: state.navbar.show_navbar
})

export default connect(mapStateToProps, { ToggleNav })(Backdrops)