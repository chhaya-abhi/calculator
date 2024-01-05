// App.js
import React, { useState } from 'react';
import Calculator from './Calculator';
import PeterNumberCalculator from './PeterNumberCalculator';
import Menu from './Menu';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectCalculator = () => {
    setSelectedComponent('calculator');
  };

  const handleSelectPeterNumberCalculator = () => {
    setSelectedComponent('peterNumberCalculator');
  };

  return (
    <div style={styles.appContainer}>
      <Menu
        onSelectCalculator={handleSelectCalculator}
        onSelectPeterNumberCalculator={handleSelectPeterNumberCalculator}
      />
      {selectedComponent === 'calculator' && <Calculator />}
      {selectedComponent === 'peterNumberCalculator' && <PeterNumberCalculator />}
    </div>
  );
};
 
const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
};

export default App;
