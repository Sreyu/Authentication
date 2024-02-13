// App.js
import React from 'react';
import MyResponsiveBar from './MyResponsiveBar'; 

const App = () => {
    const data = [
      {
        "country": "AD",
        "hot dog": 135
      },
      {
        "country": "AE",
        "burger": 191
      },
      {
        "country": "AF",
        "sandwich": 18
      },
      {
        "country": "AG",
        "kebab": 24
       
      },
      {
        "country": "AI",
        "fries": 21
      },
      {
        "country": "AL",
        "donut": 192
      },
      
    ]

    return (
        <div style={{ height: '500px' }}>
            <h1>OCI Chart</h1>
            <MyResponsiveBar data={data}/>
        </div>
    );
};

export default App;
