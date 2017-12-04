import React from 'react';
import './Page3.css';
import '../Responsive.css';
import LazyLoad from 'react-lazy-load';

export default class Page3 extends React.Component {
    render() {
        return (

            
            
                <div className=' col-12'>
           
              
             
                <div >
                  <LazyLoad>
                    <h2 className='titleTimeline'>Timeline</h2>
                  </LazyLoad>
                <div className="timeline">
                  <LazyLoad>
                    <div className="container left">
                      <div className="content">
                        <h2>December 2017</h2>
                        <p>learned alex skill</p>
                        <ul>
                          <li>calendar skill</li>
                          <li>weather skill</li>
                        </ul>
                      </div>
                    </div>
                  </LazyLoad>
                  <LazyLoad>
                    <div className="container right">
                      <div className="content">
                        <h2>November 2017</h2>
                        <p>Learned Ruby on Rails</p>
                        <ul>
                          <li>jobTacker</li>
                          <li>calendar</li>
                          <li>Binary tree</li>
                        </ul>
                      </div>
                    </div>
                  </LazyLoad>
                  <LazyLoad>
                    <div className="container left">
                      <div className="content">
                        <h2>October 2017</h2>
                        <p>Learned Mern = mongo, react, node</p>
                        <ul>
                          <li>Rainy Day</li>
                          <li>calendar</li>
                        </ul>
                      </div>
                    </div>
                  </LazyLoad>
                  <LazyLoad>
                    <div className="container right">
                      <div className="content">
                        <h2>September 2017</h2>
                        <p>Learned AJAX & Jason, Restful APIs, SQL</p>
                        <lu>
                          <li>Recipie app</li>
                          <li>Giphy Generator</li>
                        </lu>
                      </div>
                    </div>
                  </LazyLoad>
                  <LazyLoad>
                    <div className="container left">
                      <div className="content">
                        <h2>Augest 2017</h2>
                        <p>Basic HTML & CSS</p>
                      </div>
                    </div>
                  </LazyLoad>
                  <LazyLoad>
                    <div className="container right">
                      <div className="content">
                        <h2>2007</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                      </div>
                    </div>
                  </LazyLoad>
                  </div>
                </div>
            </div>


        );
    }
}
