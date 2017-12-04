import React from 'react';
import './PageLiner.css';
import '../Responsive.css';

export default class PageLiner extends React.Component {
    render() {
        return (

            <div className="pageLiner">
                <ul>
                <li className=" col-m-4 ">Improvise</li>
                <li className=" col-m-4 ">Adapt</li>
                <li className=" col-m-4 "> Overcome</li>
                </ul>
            </div>

        );
    }
}