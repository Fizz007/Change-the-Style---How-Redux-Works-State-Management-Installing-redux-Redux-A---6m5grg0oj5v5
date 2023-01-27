import React from 'react'
import '../styles/App.css';
import {useSelector,useDispatch} from "react-redux";
import {changeColor,changeStyle } from '../actions/index.js';
import { useState } from 'react';

const App = () => {

const dispatch =useDispatch();
//code here 

function color(){
  dispatch(changeColor(colorState))
  setcolorState(colorState === 'RED' ? 'GREEN' : 'RED' )
}

function style(){
  dispatch(changeStyle(styleState))
  setstyleState(styleState === 'ARIAL' ? 'GEORGIA' : 'ARIAL')
}

const [colorState, setcolorState] = useState();
const [styleState, setstyleState] = useState();

  return (
    <div id="main">
      <h1 id='text' style={{color: colorState, fontFamily: styleState}}>Newton School</h1>
      <button id='colorBtn' onClick={color}>Change Color</button>
      <button id='styleBtn' onClick={style}>Change Style</button>

    </div>
  )
}


export default App;
