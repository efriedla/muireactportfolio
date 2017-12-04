import React from 'react';
import './PageHeader.css';
import '../Responsive.css';

export default class PageHeader extends React.Component {
    render() {
        return (
           
           <div className='pageHeader'>
               <h1>Hello</h1>
            <div class="pad-up">
                <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
            </div>
           </div>
         
            
        );
    }
}