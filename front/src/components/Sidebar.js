import React from 'react';
import Me from '../media/Soilhat MOHAMED.jpg'

export default class Aside extends React.Component{
    render(){
        return(
            <div className="sidebar box shadow pb-0 sticky-column">
                <a href="/">
                    <img src={Me}/>
                    {/*<svg className="avatar avatar--180" viewBox="0 0 188 188">
                        <g className="avatar__box">
                            <image src={Me} height="100%" width="100%"/>
                        </g>
        </svg>*/}
                </a>
                <div className="text-center">
                    <h3 className="title title--h3 sidebar__user-name">
                        <span className="weight--500">Soilhat</span> MOHAMED
                    </h3>
                    <div className="badge badge--gray">Fullstack Web Developer</div>
                    <div className="social">
                        <a target="_blank" rel="noreferrer" data-no-swup="" className="social__link" href="https://facebook.com/" title="Facebook"> <i className="fab fa-facebook-f"></i> </a>
                        <a target="_blank" rel="noreferrer" data-no-swup="" className="social__link" href="https://instagram.com/" title="Instagram"> <i className="fab fa-instagram"></i> </a>
                    </div>
                </div>
                <div className="sidebar__info box-inner box-inner--rounded">
                    <ul className="contacts-block">
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Address"> <i class="fab fa-map-marker-alt"></i> Paris, France</li>
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email"><a href="mailto:soilhatmohamed@gmail.com" target="_blank" rel="noreferrer"><i class="fab fa-envelope"></i>soilhatmohamed@gmail.com</a>
                        </li>
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Phone">
                            <a href="tel:+33779784256" target="_blank" rel="noreferrer"> <i class="fab fa-phone-alt"></i>+33 (0)7 79 78 42 56</a>
                        </li>
                    </ul>
                    {/*<a className="btn" target="_blank" rel="noreferrer" data-no-swup="" href="https://bslthemes.site/ryancv/wp-content/uploads/2021/07/Jacky-Smith-Resume-Project-Manager.pdf"><i className="font-icon icon-download"></i> Download CV</a>*/}
                </div>
            </div>
        )
    }
}