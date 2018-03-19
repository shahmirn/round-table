import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import './App.css';

import MenuAppBar from './components/MenuAppBar';
import Home from './components/Home';
import Login from './components/Login';
import { blueGrey } from 'material-ui/colors';
import SignUp from './components/SignUp';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey
  },
  typography: {
    fontFamily: 'Lato'
  }
});

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      // </div>
      <MuiThemeProvider theme={theme}>
        <Router>
          <>
            <MenuAppBar />
            <Route exact={true} path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
