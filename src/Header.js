import React from 'react';
import './Header.css';
import './Responsive.css';

export default class Header extends React.Component {

    render() {
        return (
          <div>
            <div className='header' >
              <h1>Liz</h1>
            </div>

            <div className="row">

              <div className="col-3 col-m-3 menu">
                <ul>
                  <li>Improvise</li>
                  <li>Adapt</li>
                  <li>Overcome</li>
                </ul>
              </div>

              <div className="col-6 col-m-9">
                <h1>Creativity</h1>
                <p>Liz is the capital of the Creativity region on the island of awesome. 
                  Liz can be divided in two parts,
                   amazing and fantastic.</p>
                <p>Resize the browser window to see how the content respond to the resizing.</p>
              </div>
              <div className="col-3 col-m-12 right">
                <div className="aside">
                  <h2>What?</h2>
                  <p>Liz is an awsome junior web developer</p>
                  <h2>Where?</h2>
                  <p>Liz is living in an awesome city known as Seattle.</p>
                  <h2>How?</h2>
                  <p>You can reach Liz via message</p>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>
          </div>
        );
      }
    }