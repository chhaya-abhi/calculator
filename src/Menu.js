// Menu.js
import React from 'react';

const Menu = ({ onSelectCalculator, onSelectPeterNumberCalculator }) => {
  return (
    <div style={styles.menu}>
      <button onClick={onSelectCalculator} style={styles.button}>
        Calculator
      </button>
      <button onClick={onSelectPeterNumberCalculator} style={styles.button}>
        Peter's Number Calculator
      </button>
    </div>
  );
};

const styles = {
  menu: {
    marginBottom: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Menu;
