import React from 'react';
import './Slide.css';
import '../Responsive.css';
import LazyLoad from 'react-lazy-load';


export default class Home extends React.Component {
    render() {
        return (
        <div className='row'>
            <div  >
                <ul className='slideNav col-3'>
                    <li>*</li>
                    <li>*</li>
                    <li>*</li>
                </ul>
            </div>
            
        </div>

        );
    }
}
