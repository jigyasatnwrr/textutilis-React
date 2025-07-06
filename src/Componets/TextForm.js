import { useState } from "react"
import React from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
     setText(newText); 
     props.showalert('Convert to uppercase',"success")
  
  }
  
  const handlelowClick = ()=>{
    let newText = text.toLowerCase();
     setText(newText); 
     props.showalert('Convert to lowercase',"success")
  
  }
  const handleclear = ()=>{
    let newText = "";
     setText(newText); 
    props.showalert('Text cleared',"success")
  }
  const handleOnChange = (e) => {
  setText(e.target.value);
};
 
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}


  const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className="container" style={{color :props.mode===`dark`?`white`:`#212521`}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="my-box" class="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8" style={{backgroundColor :props.mode===`light`?`white`:`#212521`, color :props.mode===`dark`?`white`:`#212521` }}></textarea>
        </div>
        <button className = 'btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className = 'btn btn-primary mx-2' onClick={handlelowClick} >Convert to Lowercase</button>
        <button className = 'btn btn-primary mx-2' onClick={handleclear} >Clear text</button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3">
      <h2 style={{color :props.mode===`dark`?`white`:`#212521`}}>Your Text Summary</h2>
      <p style={{color :props.mode===`dark`?`white`:`#212521`}}>{text.split(" ").length} words and {text.length} characters</p>
      <p style={{color :props.mode===`dark`?`white`:`#212521`}}>{0.008*text.split(" ").length} Mintues to read</p>
      <h2 style={{color :props.mode===`dark`?`white`:`#212521`}}>Preview</h2>
      <p style={{color :props.mode===`dark`?`white`:`#212521`}}>{text.length>0?text:"Enter something in textbox to preview it here !"}</p>
    </div>
    </>
        
    
  )
}
