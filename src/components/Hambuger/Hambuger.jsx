import React, { Component } from 'react';
import style from './Hambuger.module.css';
import { connect } from 'react-redux';
import { ToggleNav } from '../../actions/toggleNav'

 class Hambuger extends Component {
    render() {
        return (
            <div className={style.hambuger} onClick={this.props.ToggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    navbarHandle: state.navbar.show_navbar
})

export default connect(mapStateToProps,{ ToggleNav })(Hambuger)
