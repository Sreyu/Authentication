import React from 'react';
import MyResponsivePie from './MyResponsivePie';

const App = () => {
  const data = [
    { id: 'hack', label: 'hack', value: 159, color: 'hsl(203, 70%, 50%)' },
    { id: 'make', label: 'make', value: 471, color: 'hsl(33, 70%, 50%)' },
    { id: 'java', label: 'java', value: 513, color: 'hsl(140, 70%, 50%)' },
    { id: 'ruby', label: 'ruby', value: 521, color: 'hsl(182, 70%, 50%)' },
    { id: 'erlang', label: 'erlang', value: 161, color: 'hsl(13, 70%, 50%)' }
  ];

  const handlePieClick = (datum, event) => {
    console.log('Clicked data:', datum);
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MyResponsivePie data={data} onClick={handlePieClick} />
    </div>
  );
};

export default App;
