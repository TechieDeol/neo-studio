import React, { useEffect } from 'react';
import fetchData from './api';

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Neo Studio MERN Stack</h1>
    </div>
  );
}

export default App;
