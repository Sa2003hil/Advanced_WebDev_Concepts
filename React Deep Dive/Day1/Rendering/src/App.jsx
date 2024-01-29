import React, { useState } from 'react'

//  Re-render the component when the state changes here in this example the state is title and it is changing on button click

/*
It happens when 
1. A state variable that is being used inside a component changes 
2. A parent component re-render triggers all children re-rendering 
*/


/*
// How to minimize re-rendering of components

^ 1. Push the state down
^ 2. always use the state in the nearly anscestor component dont use it in the parent component because it will trigger the re-rendering of all the children components
function App() {

  return (
    <div>
      <HeaderWithButton />
      <Header title="My Name is Raman"></Header>
      <Header title="My Name is Raman"></Header>
      <Header title="My Name is Raman"></Header>
      <Header title="My Name is Raman"></Header>
    </div>
  );
}


// Push the state down
function HeaderWithButton() {
  const [title, setTitle] = useState("My Name is Sahil");
  const updateTitle = () => {
    setTitle("My Name is " + Math.random());
  };


  return (
    <div>
      <button onClick={updateTitle}>Change the title</button>
      <Header title={title}></Header>
    </div>
  )

}


function Header({ title }) {
  return (
    <h1>{title}</h1>
  )
}

*/

/* 
^ use React.memo() to memoize the component and prevent it from re-rendering this will only work if the props are not changing like in this example we have prop only in the first Header component and not in the rest of the components so only the first component will re-render and the rest will not re-render

*/

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
      <Header title="My Name is Raman"></Header>
      <Header title="My Name is Raman"></Header>
      <Header title="My Name is Raman"></Header>
      <Header title="My Name is Raman"></Header>
    </div>
  );
}


// function Header({ title }) {
//   return (
//     <h1>{title}</h1>
//   )
// }

const Header = React.memo(function Header({ title }) {
  return (
    <h1>{title}</h1>
  )
}
)


export default App
