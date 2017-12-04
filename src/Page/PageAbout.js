import React from 'react';
import './PageAbout.css';
import '../Responsive.css';

export default class PageAbout extends React.Component {
    render() {
        return (

            <div className=" pageAbout">
              
                <section className="bg-primary" id="about">
                    <div >
                    
                        <div className="">
                        <h2 className="">Looking for a quick learning junior dev? That's me! Take a look below.</h2>
                        
                        <p className="text-faded">
                            I have a degree in bussiness administration and a recent graduate of GA where I expanded my knowledge of Web Development.
                            I am expanding my knowledge with math, javascript, and practice.
                            I look forward to working with you.
                        </p>
                        <a className="btn btn-default btn-xl js-scroll-trigger" href="https://docs.google.com/document/d/e/2PACX-1vQ_nctaVfiuMTko3cvgGaeqlvAF5mV6OQUh_lNxwgisa1FyaoGCvaE1cgJtL627i-v1GfQsE2QQGRkf/pub" target="_blank">Resume</a>
                        
                    </div>
                    </div>
                </section>
            </div>

        );
    }
}