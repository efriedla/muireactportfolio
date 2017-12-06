import React from 'react';
import './Page2.css';
import '../Responsive.css';

export default class Page2 extends React.Component {
    render() {
        return (

            <div className='col-9 col-m-8'>
               
                <div className='pageCardSkills'>
     
                <h1>Skills</h1>
                <hr  />
               
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
               
                    
                </div>
              
            </div>


        );
    }
}
