import React from 'react';
import { NavLink } from 'react-router-dom';
import Languages from '../Languages';

export default class Home extends React.Component{
    constructor(){
        super();
        this.state = {
           open: false
        }
    }

    changeMenu = () =>{
        this.setState({open:!this.state.open})
    }

    render(){
        return(
            <nav>
                <div class="circle-menu">
                    <div class={this.state.open?"hamburger is-active":"hamburger"} onClick={this.changeMenu}>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="inner-menu js-menu">
                    <ul class="nav" style={{width: this.state.open?"100%" : "0%"}}>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-39 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children dropdown nav__item" style={{opacity: this.state.open? 1 : 0, transform: "translateX(70px)"}}>
                            <NavLink to='/'>
                                <span class="animated-button">
                                    <span>{Languages.menu.Home}</span>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}