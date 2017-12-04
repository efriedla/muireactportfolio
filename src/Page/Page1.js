import React from 'react';
import './Page1.css';
import '../Responsive.css';
import LazyLoad from 'react-lazy-load';

export default class Page1 extends React.Component {
    render() {
        return (

            <div className='col-3 col-m-4'>
                <div className='pageCardAvitar avitar' >
                    <h1 className=' w3-container w3-center '>Liz</h1>

                </div>
                <div className='pageCardContact w3-animate-top'>
                    <h1>contact</h1>
                    <a className="resume" href="https://docs.google.com/document/d/e/2PACX-1vQ_nctaVfiuMTko3cvgGaeqlvAF5mV6OQUh_lNxwgisa1FyaoGCvaE1cgJtL627i-v1GfQsE2QQGRkf/pub" target="_blank">Resume</a>
                    <br/>
                    <p><a href='https://github.com/efriedla'><i class="fa fa-github fa-3x sr-contact"></i></a> Github</p>
                    <p><a href='https://www.linkedin.com/in/elizabeth-friedland13/'><i class="fa fa-linkedin-square fa-3x sr-contact"></i></a> Linkedin</p>
                        
                    
                </div>
                {/* <div className='pageCardAvitar'>
                <h1>Skills</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Express</li>
                        <li>Nodejs</li>
                        <li>Reactjs</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Ruby on Rails</li>
                        <li>Heroku</li>
                        <li>Github</li>
                        <li>oAuth</li>
                    </ul>
                 </div> */}
            </div>


        );
    }
}
