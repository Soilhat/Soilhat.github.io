import React from 'react';

export default class ContactBlock extends React.Component{
    render(){
        return(
            <ul className="contacts-block">
                {this.props.children.map(child => <li className="contacts-block__item">{child}</li>)}
            </ul>
        )
    }
}