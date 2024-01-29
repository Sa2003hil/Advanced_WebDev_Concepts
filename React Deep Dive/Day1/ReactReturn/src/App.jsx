import React, { useState } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="sahil1"></Header>
      <Header title="sahil2"></Header>
    </div>
  );
}

function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  );
}

export default App;
