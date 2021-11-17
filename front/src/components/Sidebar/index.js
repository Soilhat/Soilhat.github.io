import React from 'react';
import Me from '../../media/Soilhat MOHAMED.jpg'
import Avatar from './Avatar';
import ContactBlock from './ContactBlock';

export default class Aside extends React.Component{
    render(){
        return(
            <div className="sidebar box shadow pb-0 sticky-column">
                <a href="/"><Avatar src={Me}/></a>
                <div className="text-center">
                    <h3 className="title title--h3 sidebar__user-name">
                        <span className="weight--500">Soilhat</span> MOHAMED
                    </h3>
                    <div className="badge badge--gray">Fullstack Web Developer</div>
                    <div className="social">
                        <a target="_blank" rel="noreferrer" className="social__link" href="https://facebook.com/" title="Facebook"> <i className="fab fa-facebook-f"></i> </a>
                        <a target="_blank" rel="noreferrer" className="social__link" href="https://instagram.com/" title="Instagram"> <i className="fab fa-instagram"></i> </a>
                    </div>
                </div>
                <div className="sidebar__info box-inner box-inner--rounded">
                    <ContactBlock>
                        <div><i class="fab fa-map-marker-alt"></i>Paris, France</div>
                        <a href="mailto:soilhatmohamed@gmail.com" target="_blank" rel="noreferrer"><i class="fab fa-envelope"></i>soilhatmohamed@gmail.com</a>
                        <a href="tel:+33779784256" target="_blank" rel="noreferrer"> <i class="fab fa-phone-alt"></i>+33 (0)7 79 78 42 56</a>
                    </ContactBlock>
                    {/*<a className="btn" target="_blank" rel="noreferrer" href="https://bslthemes.site/ryancv/wp-content/uploads/2021/07/Jacky-Smith-Resume-Project-Manager.pdf"><i className="fab fa-download"></i> Download CV</a>*/}
                </div>
            </div>
        )
    }
}