import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('0');
  const [secondVal, setSecondVal] = useState('');
  const [reset, setReset] = useState(true);
  const [operator, setOperator] = useState('');

  return (
    <div className='App'>
      <div className='calculator'>
        <div className='input' id='input'>{ operator === '' ? value : secondVal}</div>
        <div className='buttons'>
          <div className='operators'>
            <div>+</div>
            <div>-</div>
            <div>x</div>
            <div>/</div>
          </div>
          <div className='leftPanel'>
            <div className='numbers'>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
            <div className='numbers'>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
            <div className='numbers'>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div className='numbers'>
              <div>0</div>
              <div>.</div>
              <div>C</div>
            </div>
          </div>
          <div className='equal' id='result'>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
