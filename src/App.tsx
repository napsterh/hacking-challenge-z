import React, {useState} from 'react';
import './App.scss'
import { Steps, Step, NavigationComponentProps } from "react-step-builder";
import Home from './components/Home';
import Auto from './components/Auto';
import Planes from './components/Planes';
import Gracias from './components/Gracias';

const App = () => {
  return (
    <div>
      <Steps >
        <Step component={Home}/>
        <Step component={Auto}/>
        <Step component={Planes}/>
        <Step component={Gracias}/>
      </Steps>
    </div>
  );
}

export default App;
