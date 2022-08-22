import React from 'react';
import ReactHtmlParser from "react-html-parser";

export default class AboutMe extends React.Component{
    render(){
        return(
            <section className="soilhat-section soilhat-element">
                <div className="soilhat-container soilhat-column-gap-no">
                    <div className="soilhat-column soilhat-col-100 soilhat-element">
                        <div className="soilhat-widget-wrap soilhat-element-populated">
                            <div className="soilhat-element soilhat-widget">
                                <div className="soilhat-widget-container">
                                    <div className="pb-0 pb-sm-2 section">
                                        <h2 className="title title--h2 first-title title__separate"> <span>{this.props.lang.AboutMe.title}</span></h2>
                                        <div className="single-post-text">
                                            <div>
                                                {ReactHtmlParser(this.props.lang.AboutMe.about)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}