import React from 'react';
import './PageContact.css';
import '../Responsive.css';

export default class PageContact extends React.Component {
    render() {
        return (

            <div className="col-12 col-m-12 right ">
                <div className="pageContact">
                  <h2>What?</h2>
                  <p>Liz is an awsome junior web developer</p>
                  <h2>Where?</h2>
                  <p>Liz is living in an awesome city known as Seattle.</p>
                  <h2>How?</h2>
                  <p>You can reach Liz via message</p>
                </div>
            </div>

        );
    }
}