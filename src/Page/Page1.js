import React from 'react';
import './Page1.css';
import '../Responsive.css';
import LazyLoad from 'react-lazy-load';

export default class Page1 extends React.Component {
    render() {
        return (

            <div className='col-3 col-m-4'>
                <div className='pageCardAvitar avitar' >
     
                </div>
                <div className='pageCardContact w3-animate-top'>
                    <h1>contact</h1>
                    <a className="resume" href="https://docs.google.com/document/d/e/2PACX-1vQ_nctaVfiuMTko3cvgGaeqlvAF5mV6OQUh_lNxwgisa1FyaoGCvaE1cgJtL627i-v1GfQsE2QQGRkf/pub" target="_blank">Resume</a>
                    <br/>
                    <p><a href='https://github.com/efriedla'><i className="fa fa-github fa-3x sr-contact"></i></a> Github</p>
                    <p><a href='https://www.linkedin.com/in/elizabeth-friedland13/'><i className="fa fa-linkedin-square fa-3x sr-contact"></i></a> Linkedin</p>
                        
                    
                </div>
            </div>


        );
    }
}
