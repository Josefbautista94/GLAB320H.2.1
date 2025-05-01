import { useState } from 'react'

import './App.css'

function Header() {
  return <h1>Simple React Application</h1>;
}

function Content(props) {
  return <p style={{ color: props.color }}>{props.text}</p>;
}

function Footer() {
  return <h2>Created by Me, of course.</h2>;
}


function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}



export default App;