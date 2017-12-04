import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Checkbox from './Checkbox';
import Cardbox from './Card';
import Page from './Page';
import TabsExampleSwipeable from './Tabs';
import DatePicker1 from './Calender';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


class App extends Component {
  render() {
    return (
      <div>
      {/* // <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}> */}
        {/* <AppBar title="My AppBar" /> */}
        <Page />
        {/* <Header /> */}
        {/* <Checkbox /> */}
        {/* <Cardbox /> */}
{/* 
        <TabsExampleSwipeable /> */}
      {/* </MuiThemeProvider> */}
      </div>
    );
  }
}

export default App;
