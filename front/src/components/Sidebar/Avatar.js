import React from 'react';

export default class Avatar extends React.Component{
    render(){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" className="avatar avatar--180" viewBox="0 0 188 188">
                <g className="avatar__box">
                    <image xlinkHref={this.props.src} height="100%" width="100%" alt="avatar"/>
                </g>
            </svg>
        )
    }
}