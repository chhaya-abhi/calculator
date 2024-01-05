import React, { useState } from 'react';

const PeterNumberCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculateLastPeterNumber = () => {
    const inputNumber = parseInt(input, 10);

    if (!isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= Math.pow(10, 18)) {
      const resultNumber = findLastPeterNumber(inputNumber);
      setResult(resultNumber.toString());
    } else {
      setResult('Invalid input. Please enter a number between 1 and 10^18.');
    }
  };

  const findLastPeterNumber = (inputNumber) => {
    const digits = Array.from(inputNumber.toString()).map(Number);

    for (let i = digits.length - 1; i > 0; i--) {
      if (digits[i] < digits[i - 1]) {
        digits[i - 1] -= 1;
        for (let j = i; j < digits.length; j++) {
          digits[j] = 9;
        }
      }
    }

    return parseInt(digits.join(''), 10);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Peter's Number Calculator</h1>
      <div style={styles.inputContainer}>
        <label style={styles.label}>
          Enter a number between 1 and 10^18:&nbsp;
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} style={styles.input} />
        </label>
        <button onClick={calculateLastPeterNumber} style={styles.button}>
          Calculate
        </button>
      </div>
      <div style={styles.result}>
        Result: {result}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  result: {
    fontSize: '18px',
  },
};

export default PeterNumberCalculator;
