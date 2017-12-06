import React from 'react';
import './Page.css';
import './Responsive.css';
import PageHeader from './Page/PageHeader';
import PageSkills from './Page/PageSkills';
import PageLiner from './Page/PageLiner';
import PageAbout from './Page/PageAbout';
import PageContact from './Page/PageContact';
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';
import Page3 from './Page/Page3';
import Home from './Slide/Home';
import Header from './Header';

import PageFooter from './Page/PageFooter';

export default class Page extends React.Component {
    render() {
        return (
            <div >     
                 <div className='staticHeader parallax'>
                    <p className="text line-1 anim-typewriter col-5">
                        My name is Elizabeth Friedlandand, and I am a full Developer
                    </p>
                 </div>
                <div className='row'> 
                    <div className="parallax col-12 ">
                {/* <PageHeader /> */}                  
                        {/* <PageLiner /> */}
                         {/* <PageAbout />
                        <PageSkills /> */}
                       
                        {/* <PageContact />  */}
                         <Page1 /> 
                        <Page2/>
                    </div>
                    <div className="parallax col-12  ">
                        <Page3/>
                    </div>
                </div>
                <div className="parallax"></div>
                <PageFooter />

                {/* <Home /> */}
                
           </div>
        );
    }
}