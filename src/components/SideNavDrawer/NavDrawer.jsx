import React from 'react';
import './NavDrawer.css';
import { connect } from 'react-redux';
import { ToggleNav } from '../../actions/toggleNav';


 const NavDrawer = (props) => {
    const Logo ="https://res.cloudinary.com/oyindacodes/image/upload/v1603404297/DashMe._qsmsy4.svg";

    let drawerclass = 'sidedrawer'
    if (props.navbar) {
        drawerclass = 'sidedrawer open';
    }

    return (
        <nav className={drawerclass}>
            <ul>
                <li><a href="">Home </a></li>
                <li><a href="#feature">Feature </a></li>
                <li><a href="#team">Team </a></li>
                <li><a href="#help">Help </a></li>
            </ul>
        </nav>
    );
}

const mapStateToProps = state => ({
    navbar: state.navbar.show_navbar
})

export default connect(mapStateToProps, { ToggleNav })(NavDrawer);