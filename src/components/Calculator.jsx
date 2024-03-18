import  { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === '+/-') {
      changeSign();
    } else if (isOperator(value)) {
      if (displayValue !== '') {
        if (previousValue && operator) {
          calculateResult();
        }
        setOperator(value);
        if (previousValue === '') {
          setPreviousValue(displayValue);
        }
        setDisplayValue(displayValue + value); // Display the operator
      }
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const isOperator = (value) => {
    return value === '+' || value === '-' || value === '*' || value === '/' || value === '%';
  };

  const clearDisplay = () => {
    setDisplayValue('');
    setPreviousValue('');
    setOperator('');
  };

  const changeSign = () => {
    if (displayValue !== '') {
      setDisplayValue(String(-parseFloat(displayValue)));
    }
  };

  const calculateResult = () => {
    if (operator && previousValue) {
      const operatorIndex = displayValue.indexOf(operator);
      const currentValue = parseFloat(displayValue.substring(operatorIndex + 1));
      const previousNumber = parseFloat(previousValue);

      let result;
      switch (operator) {
        case '+':
          result = previousNumber + currentValue;
          break;
        case '-':
          result = previousNumber - currentValue;
          break;
        case '*':
          result = previousNumber * currentValue;
          break;
        case '/':
          result = previousNumber / currentValue;
          break;
        case '%':
          result = (previousNumber * currentValue) / 100; // Calculate percentage
          break;
        default:
          return;
      }

      console.log('Result:', result);
      setDisplayValue(String(result));
      setPreviousValue(String(result)); // Set previous value as result
      setOperator('');
    }
  };
  

  return (
    <div className="calculator">
      <div className='calc'>
      <input
        style={{verticalAlign: "bottom"}}
        type="text"
        placeholder='0'
        value={displayValue}
        onChange={(e) => setDisplayValue(e.target.value)}
        readOnly
      />
      </div>
      <div className="buttons">
        <div className='row'>
        <button onClick={() => handleButtonClick('C')} className='white' style={{borderRadius:"50%", padding: "14px 11px", margin:"5px 9px"}}>AC</button>
        <button onClick={() => handleButtonClick('+/-')} className='b white' style={{ padding: "14px 13px", margin:"5px 8px"}}>+/-</button>
        <button onClick={() => handleButtonClick('%')} className='b white'  style={{ padding: "14px 20px", margin:"5px 9px"}}>%</button>
        <button onClick={() => handleButtonClick('/')} className='b orange'  style={{ padding: "14px 23px", margin:"5px 9px"}}>÷</button>
        </div>

<div className='row'>
        <button onClick={() => handleButtonClick('7')} className='b gray'  style={{ padding: "14px 23px", margin:"5px 9px"}}>7</button>
        <button onClick={() => handleButtonClick('8')} className='b gray'  style={{ padding: "14px 22px", margin:"5px 9px"}}>8</button>
        <button onClick={() => handleButtonClick('9')} className='b gray'  style={{ padding: "14px 23px" , margin:"5px 9px"}}>9</button>
        <button onClick={() => handleButtonClick('*')} className='b orange'  style={{ padding: "14px 23px", margin:"5px 9px"}}>×</button>
</div>

<div className='row'>
        <button onClick={() => handleButtonClick('4')} className='b gray'  style={{ padding: "14px 23px", margin:"5px 9px"}}>4</button>
        <button onClick={() => handleButtonClick('5')} className='b gray'  style={{ padding: "14px 23px", margin:"5px 9px"}}>5</button>
        <button onClick={() => handleButtonClick('6')} className='b gray'  style={{ padding: "14px 23px", margin:"5px 9px"}}>6</button>
        <button onClick={() => handleButtonClick('-')} className='b orange' style={{padding:"14px 26px", margin:"5px 9px"}}>-</button>
        </div>

        <div className='row'>
        <button onClick={() => handleButtonClick('1')} className='b gray' style={{padding:"14px 23px", margin:"5px 9px"}}>1</button>
        <button onClick={() => handleButtonClick('2')} className='b gray' style={{padding:"14px 23px", margin:"5px 9px"}}>2</button>
        <button onClick={() => handleButtonClick('3')} className='b gray' style={{padding:"14px 23px", margin:"5px 9px"}}>3</button>
        <button onClick={() => handleButtonClick('+')} className='b orange' style={{padding:"14px 23px", margin:"5px 9px"}}>+</button>
        </div>

        <div className='row'>
        <button onClick={() => handleButtonClick('0')} className='b gray' style={{padding:"14px 26px", margin:"5px 9px", width:"144px", borderRadius:"50px", textAlign:"left"}}>0</button>
        <button onClick={() => handleButtonClick('.')} className='b gray' style={{padding:"14px 28px", margin:"5px 9px"}}>.</button>
        <button onClick={() => handleButtonClick('=')} className='b orange' style={{padding:"14px 23px", margin:"5px 9px"}}>=</button>
        </div>

      </div>
    </div>
  );
};

export default Calculator;
