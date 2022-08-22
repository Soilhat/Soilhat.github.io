import React from 'react';

export default class SubMenu extends React.Component{
    render(){
        return(
            <ul className="sub-menu dropdown-menu">
                {this.props.children.map((child, id) => <li key={id} className=" menu-item menu-item-type-post_type menu-item-object-page nav__item" style={{opacity: this.props.opened? 1 : 0, transform: "translateX(70px)"}}>{child}</li> )}
            </ul>
        )
    }
}