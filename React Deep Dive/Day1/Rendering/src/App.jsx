import { useState } from 'react'

//  Re-render the component when the state changes here in this example the state is title and it is changing on button click

function App() {
  const [title, setTitle] = useState("My Name is Sahil");

  const updateTitle = () => {
    setTitle("My Name is " + Math.random());
  };

  return (
    <div>
      <button onClick={updateTitle}>Change the title</button>
      <Header title={title}></Header>
      <Header title="My Name is Raman"></Header>
    </div>
  );
}


function Header({ title }) {
  return (
    <h1>{title}</h1>
  )
}


export default App
