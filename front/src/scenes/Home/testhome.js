import React from 'react';
import AboutMe from './components/AboutMe';

export default class Home extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="transition-fade">
                    <div className="page">
                        <div className="elementor">
                            <div>
                                <AboutMe/>
                                    {/*<section className="elementor-section elementor-top-section elementor-element elementor-element-a3baa10 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="a3baa10" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-no">
                                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0a35826" data-id="0a35826" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-9108147 elementor-widget elementor-widget-vcard-services" data-id="9108147" data-element_type="widget" data-widget_type="vcard-services.default">
                                                        <div className="elementor-widget-container">
                                                            <div className="box-inner pb-0 section">
                                                                <h2 className="title title--h title--h3"> <span> What I'm Doing </span></h2>
                                                                <div className="row">
                                                                    <div className="col-12 col-lg-6">
                                                                        <div className="case-item box box__second">
                                                                            <img className="case-item__icon" src="https://bslthemes.site/vcard/wp-content/uploads/2021/07/icon-design.png" alt=""/>
                                                                            <div>
                                                                                <h3 className="title title--h5"> <span> Web Design </span></h3>
                                                                                <p className="case-item__caption"> <span> The most modern and high-quality design made at a professional level. </span></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-lg-6">
                                                                    <div className="case-item box box__second">
                                                                        <img className="case-item__icon" src="https://bslthemes.site/vcard/wp-content/uploads/2021/07/icon-dev.png" alt=""/>
                                                                        <div>
                                                                            <h3 className="title title--h5"> <span> Web Development </span></h3>
                                                                            <p className="case-item__caption"> <span> High-quality and professional development of sites at the professional level. </span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            <div className="col-12 col-lg-6">
                                                            <div className="case-item box box__second">
                                                                <img className="case-item__icon" src="https://bslthemes.site/vcard/wp-content/uploads/2021/07/icon-app.png" alt=""/>
                                                                <div>
                                                                    <h3 className="title title--h5"> <span> Mobile Apps </span></h3>
                                                                    <p className="case-item__caption"> <span> Professional development of applications for iOS and Android. </span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6">
        <div className="case-item box box__second"> <img className="case-item__icon" src="https://bslthemes.site/vcard/wp-content/uploads/2021/07/icon-photo.png" alt=""><div><h3 className="title title--h5"> <span> Photography </span></h3><p className="case-item__caption"> <span> I make high-quality photos of any category at a professional level. </span></p></div></div></div></div></div></div></div></div></div></div></section><section className="elementor-section elementor-top-section elementor-element elementor-element-ccdfdc5 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="ccdfdc5" data-element_type="section"><div className="elementor-container elementor-column-gap-no"><div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b3bae1f" data-id="b3bae1f" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-c26c817 elementor-widget elementor-widget-vcard-pricing" data-id="c26c817" data-element_type="widget" data-widget_type="vcard-pricing.default"><div className="elementor-widget-container"><div className="box-inner box-inner--white section"><h2 className="title title--h title--h3"> <span> Pricing plans </span></h2><div className="pricing-items"><div className="pricing-col"><div className="pricing-item content-box"><div className="icon"><i className="fa fa-battery-1"></i></div><div className="name"> <span> Basic Package </span></div><div className="amount"> <span className="number"> <span className="dollar"> <span> $ </span> </span> <span> 39 </span> <span className="period"> <span> hour </span> </span> </span></div><div className="feature-list"><div><ul><li>Web Design</li><li>Mobile Apps</li><li><em>Web Development</em></li><li><em>Photography</em></li></ul></div></div><div className="bts"> <a href="/vcard/contacts/" className="btn hover-animated"> <span className="circle"></span> <span> <span className="lnk">Get Started</span> </span> </a></div></div></div><div className="pricing-col"><div className="pricing-item content-box"><div className="icon"><i className="fa fa-battery-2"></i></div><div className="name"> <span> Pro Package </span></div><div className="amount"> <span className="number"> <span className="dollar"> <span> $ </span> </span> <span> 59 </span> <span className="period"> <span> hour </span> </span> </span></div><div className="feature-list"><div><ul><li>Web Design</li><li>Mobile Apps</li><li>Web Development</li><li><em>Photography</em></li></ul></div></div><div className="bts"> <a href="/vcard/contacts/" className="btn hover-animated"> <span className="circle"></span> <span> <span className="lnk">Get Started</span> </span> </a></div></div></div><div className="pricing-col"><div className="pricing-item content-box"><div className="icon"><i className="fa fa-battery-4"></i></div><div className="name"> <span> Premium Package </span></div><div className="amount"> <span className="number"> <span className="dollar"> <span> $ </span> </span> <span> 99 </span> <span className="period"> <span> hour </span> </span> </span></div><div className="feature-list"><div><ul><li>Web Design</li><li>Mobile Apps</li><li>Web Development</li><li>Photography</li></ul></div></div><div className="bts"> <a href="/vcard/contacts/" className="btn hover-animated"> <span className="circle"></span> <span> <span className="lnk">Get Started</span> </span> </a></div></div></div></div></div></div></div></div></div></div></section><section className="elementor-section elementor-top-section elementor-element elementor-element-e2d09c8 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="e2d09c8" data-element_type="section"><div className="elementor-container elementor-column-gap-no"><div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-78e08cf" data-id="78e08cf" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-75d8071 elementor-widget elementor-widget-vcard-testimonials" data-id="75d8071" data-element_type="widget" data-widget_type="vcard-testimonials.default"><div className="elementor-widget-container"><div className="box-inner box-inner--white section"><h2 className="title title--h title--h3"> <span> Testimonials </span></h2><div className="swiper-container js-carousel-review swiper-container-initialized swiper-container-horizontal" data-swiper-slides-per-view="2"><div className="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-890px, 0px, 0px);"><div className="swiper-slide review-item" style="width: 425px; margin-right: 20px;"> <svg className="avatar avatar--80" viewBox="0 0 84 84"> <g className="avatar__hexagon"> <image xlink:href="https://bslthemes.site/vcard/wp-content/uploads/2021/07/avatar-4-140x140.jpeg" height="100%" width="100%"></image> </g> </svg><h4 className="title title--h5"> <span> Tanya Ruiz </span></h4><p className="review-item__caption"> <span> Felecia was hired to create a corporate identity. We were very pleased with the work done. </span></p><div className="quot"> <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62644 6.14163L11.0995 7.02315C11.3631 7.18094 11.4232 7.53679 11.2282 7.77423C9.07599 10.3944 7.12216 13.2357 7.12195 16.7563C10.0635 16.7563 13.0949 19.1512 13.0949 22.2173C13.0949 26.5003 9.61052 29.1677 6.12633 28.6712C2.64214 28.1748 0.58078 25.6925 0.153573 22.7138C-0.826376 15.881 2.98832 9.72814 8.60376 6.14885C8.9145 5.95079 9.31024 5.95241 9.62644 6.14163ZM30.5316 6.14241L32.0046 7.02393C32.2683 7.18172 32.3284 7.53757 32.1333 7.77501C29.9811 10.3951 28.0273 13.2365 28.0271 16.7571C30.9687 16.7571 34 19.152 34 22.2181C34 26.5011 30.5157 29.1685 27.0315 28.672C23.5473 28.1756 21.4859 25.6933 21.0587 22.7146C20.0788 15.8818 23.8935 9.72891 29.5089 6.14963C29.8196 5.95156 30.2154 5.95318 30.5316 6.14241Z" fill="#0045FF"></path> </svg></div></div><div className="swiper-slide review-item swiper-slide-prev" style="width: 425px; margin-right: 20px;"> <svg className="avatar avatar--80" viewBox="0 0 84 84"> <g className="avatar__hexagon"> <image xlink:href="https://bslthemes.site/vcard/wp-content/uploads/2021/07/avatar-5-140x140.jpeg" height="100%" width="100%"></image> </g> </svg><h4 className="title title--h5"> <span> Thomas Castro </span></h4><p className="review-item__caption"> <span> Thanks to the skill of Felecia, we have a design that we can be proud of. </span></p><div className="quot"> <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62644 6.14163L11.0995 7.02315C11.3631 7.18094 11.4232 7.53679 11.2282 7.77423C9.07599 10.3944 7.12216 13.2357 7.12195 16.7563C10.0635 16.7563 13.0949 19.1512 13.0949 22.2173C13.0949 26.5003 9.61052 29.1677 6.12633 28.6712C2.64214 28.1748 0.58078 25.6925 0.153573 22.7138C-0.826376 15.881 2.98832 9.72814 8.60376 6.14885C8.9145 5.95079 9.31024 5.95241 9.62644 6.14163ZM30.5316 6.14241L32.0046 7.02393C32.2683 7.18172 32.3284 7.53757 32.1333 7.77501C29.9811 10.3951 28.0273 13.2365 28.0271 16.7571C30.9687 16.7571 34 19.152 34 22.2181C34 26.5011 30.5157 29.1685 27.0315 28.672C23.5473 28.1756 21.4859 25.6933 21.0587 22.7146C20.0788 15.8818 23.8935 9.72891 29.5089 6.14963C29.8196 5.95156 30.2154 5.95318 30.5316 6.14241Z" fill="#0045FF"></path> </svg></div></div><div className="swiper-slide review-item swiper-slide-active" style="width: 425px; margin-right: 20px;"> <svg className="avatar avatar--80" viewBox="0 0 84 84"> <g className="avatar__hexagon"> <image xlink:href="https://bslthemes.site/vcard/wp-content/uploads/2021/07/avatar-3-140x140.jpeg" height="100%" width="100%"></image> </g> </svg><h4 className="title title--h5"> <span> Jessica Miller </span></h4><p className="review-item__caption"> <span> Thanks to the skill of Felecia, we have a design that we can be proud of. </span></p><div className="quot"> <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62644 6.14163L11.0995 7.02315C11.3631 7.18094 11.4232 7.53679 11.2282 7.77423C9.07599 10.3944 7.12216 13.2357 7.12195 16.7563C10.0635 16.7563 13.0949 19.1512 13.0949 22.2173C13.0949 26.5003 9.61052 29.1677 6.12633 28.6712C2.64214 28.1748 0.58078 25.6925 0.153573 22.7138C-0.826376 15.881 2.98832 9.72814 8.60376 6.14885C8.9145 5.95079 9.31024 5.95241 9.62644 6.14163ZM30.5316 6.14241L32.0046 7.02393C32.2683 7.18172 32.3284 7.53757 32.1333 7.77501C29.9811 10.3951 28.0273 13.2365 28.0271 16.7571C30.9687 16.7571 34 19.152 34 22.2181C34 26.5011 30.5157 29.1685 27.0315 28.672C23.5473 28.1756 21.4859 25.6933 21.0587 22.7146C20.0788 15.8818 23.8935 9.72891 29.5089 6.14963C29.8196 5.95156 30.2154 5.95318 30.5316 6.14241Z" fill="#0045FF"></path> </svg></div></div><div className="swiper-slide review-item swiper-slide-next" style="width: 425px; margin-right: 20px;"> <svg className="avatar avatar--80" viewBox="0 0 84 84"> <g className="avatar__hexagon"> <image xlink:href="https://bslthemes.site/vcard/wp-content/uploads/2021/07/avatar-2-140x140.jpeg" height="100%" width="100%"></image> </g> </svg><h4 className="title title--h5"> <span> Daniel Lewis </span></h4><p className="review-item__caption"> <span> Felecia was hired to create a corporate identity. We were very pleased with the work done. </span></p><div className="quot"> <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62644 6.14163L11.0995 7.02315C11.3631 7.18094 11.4232 7.53679 11.2282 7.77423C9.07599 10.3944 7.12216 13.2357 7.12195 16.7563C10.0635 16.7563 13.0949 19.1512 13.0949 22.2173C13.0949 26.5003 9.61052 29.1677 6.12633 28.6712C2.64214 28.1748 0.58078 25.6925 0.153573 22.7138C-0.826376 15.881 2.98832 9.72814 8.60376 6.14885C8.9145 5.95079 9.31024 5.95241 9.62644 6.14163ZM30.5316 6.14241L32.0046 7.02393C32.2683 7.18172 32.3284 7.53757 32.1333 7.77501C29.9811 10.3951 28.0273 13.2365 28.0271 16.7571C30.9687 16.7571 34 19.152 34 22.2181C34 26.5011 30.5157 29.1685 27.0315 28.672C23.5473 28.1756 21.4859 25.6933 21.0587 22.7146C20.0788 15.8818 23.8935 9.72891 29.5089 6.14963C29.8196 5.95156 30.2154 5.95318 30.5316 6.14241Z" fill="#0045FF"></path> </svg></div></div></div><div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 3"></span></div><span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div></div></div></div></div></div></div></section><section className="elementor-section elementor-top-section elementor-element elementor-element-3eaeb61 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="3eaeb61" data-element_type="section"><div className="elementor-container elementor-column-gap-no"><div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e02d7b9" data-id="e02d7b9" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-2c964fe elementor-widget elementor-widget-vcard-clients" data-id="2c964fe" data-element_type="widget" data-widget_type="vcard-clients.default"><div className="elementor-widget-container"><div className="box-inner section"><h2 className="title title--h title--h3"> <span> Clients </span></h2><div className="swiper-container js-carousel-clients swiper-container-initialized swiper-container-horizontal"><div className="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);"><div className="swiper-slide swiper-slide-active" style="width: 150px; margin-right: 30px;"> <a href="https://envato.com" title="Sunshine"> <img src="https://bslthemes.site/vcard/wp-content/uploads/2021/08/client1-256x123.png" alt="Sunshine"> </a></div><div className="swiper-slide swiper-slide-next" style="width: 150px; margin-right: 30px;"> <a href="https://envato.com" title="Vs"> <img src="https://bslthemes.site/vcard/wp-content/uploads/2021/08/client3.png" alt="Vs"> </a></div><div className="swiper-slide" style="width: 150px; margin-right: 30px;"> <a href="https://envato.com" title="Classic"> <img src="https://bslthemes.site/vcard/wp-content/uploads/2021/08/client2-256x92.png" alt="Classic"> </a></div><div className="swiper-slide" style="width: 150px; margin-right: 30px;"> <a href="https://envato.com" title="Vintage"> <img src="https://bslthemes.site/vcard/wp-content/uploads/2021/08/client4-256x232.png" alt="Vintage"> </a></div><div className="swiper-slide" style="width: 150px; margin-right: 30px;"> <a href="https://envato.com" title="Sunshine"> <img src="https://bslthemes.site/vcard/wp-content/uploads/2021/08/client1-256x123.png" alt="Sunshine"> </a></div><div className="swiper-slide" style="width: 150px; margin-right: 30px;"> <a href="https://envato.com" title="Vs"> <img src="https://bslthemes.site/vcard/wp-content/uploads/2021/08/client3.png" alt="Vs"> </a></div></div><div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span></div><span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div></div></div></div></div></div></div></section></div>
        </div>*/}
                            </div>
                        </div>
                        <footer className="footer">© 2021 All Rights Reserved.</footer>
                    </div>
                </div>
            </div>
        )
    }
}