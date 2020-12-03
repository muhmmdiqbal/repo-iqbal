import React from 'react';
import './Contoh.css';
import './Footer.jsx';

function Welcome(props) {
  return <h1>Hello, My Name is {props.name}</h1>;
}
function Main() {
  return(
      <div>
        <Welcome name="Muhammad iqbal" />
        <p>I dont how myself still alive</p>
        <ul>
          <li>1. </li>
          <li>2. </li>
          <li>3. </li>
        </ul>
        <Footer/>
      </div>
  );
}

export default Main;
