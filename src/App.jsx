import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('0');
  const [secondVal, setSecondVal] = useState('');
  const [reset, setReset] = useState(true);
  const [operator, setOperator] = useState('');

  const operatorChange = (op) => (
    e => {
      e.preventDefault();
      setOperator(op);
      setReset(true);
    }
  )

  const clear = e => {
    e.preventDefault();
    setValue('0');
    setSecondVal('');
    setReset(true);
    setOperator('');
  }

  const updateValue = (num) => (
    e => {
      e.preventDefault();
      if(operator === '') {
        if(reset) {
          setValue(num);
          setReset(false);
        } else {
          setValue(value + num)
        }
      } else {
        if(reset) {
          setSecondVal(num);
          setReset(false);
        } else {
          setSecondVal(secondVal + num)
        }
      }
    }
  )

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
            <div onClick={operatorChange('+')}>+</div>
            <div onClick={operatorChange('-')}>-</div>
            <div onClick={operatorChange('*')}>&times;</div>
            <div onClick={operatorChange('/')}>&divide;</div>
          </div>
          <div className='leftPanel'>
            <div className='numbers'>
              <div onClick={updateValue('7')}>7</div>
              <div onClick={updateValue('8')}>8</div>
              <div onClick={updateValue('9')}>9</div>
            </div>
            <div className='numbers'>
              <div onClick={updateValue('4')}>4</div>
              <div onClick={updateValue('5')}>5</div>
              <div onClick={updateValue('6')}>6</div>
            </div>
            <div className='numbers'>
              <div onClick={updateValue('1')}>1</div>
              <div onClick={updateValue('2')}>2</div>
              <div onClick={updateValue('3')}>3</div>
            </div>
            <div className='numbers'>
              <div onClick={updateValue('0')}>0</div>
              <div onClick={updateValue('.')}>.</div>
              <div id='clear' onClick={clear}>C</div>
            </div>
          </div>
          <div className='equal' id='result' onClick={result}>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
