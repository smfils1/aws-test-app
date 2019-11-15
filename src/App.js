import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default withAuthenticator(App, true);

