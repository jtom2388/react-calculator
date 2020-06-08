import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('0');
  const [secondVal, setSecondVal] = useState('');
  const [reset, setReset] = useState(true);
  const [operator, setOperator] = useState('');

  const operatorChange = (op, e) => {
    e.preventDefault();
    setOperator(op);
    setReset(true);
  }

  const clear = e => {
    e.preventDefault();
    setValue('0');
    setSecondVal('');
    setReset(true);
    setOperator('');
  }

  const updateValue = (num, e) => {
    e.preventDefault();
    if(operator === '') {
      if(reset) {
        setValue(num);
        setReset(false);
      } else {
        if(reset) {
          setSecondVal(num);
          setReset(false);
        } else {
          setSecondVal(setSecondVal + num);
        }
      }
    }
  }

  const result = () => {
    let result;
    switch(operator) {
      case '+':
        result = parseFloat(value) + parseFloat(secondVal);
        break;
      case '-':
        result = parseFloat(value) - parseFloat(secondVal);
        break;
      case '*':
        result = parseFloat(value) * parseFloat(secondVal);
        break;
      case '/':
        result = parseFloat(value) / parseFloat(secondVal);
        break;
      default:
        result = parseFloat(value);
    }

    setOperator('');
    setValue(result.toString());
    setSecondVal('');
    setReset(true);
  }

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
