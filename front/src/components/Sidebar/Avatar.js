import React from 'react';
import Image from 'next/image'

export default class Avatar extends React.Component{
    render(){
        return(
            <span className="avatar avatar--180">
            <Image src={this.props.src} className="avatar avatar--180" viewBox="0 0 188 188" />
        </span>)
    }
}