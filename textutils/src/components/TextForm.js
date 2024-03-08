import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  console.log("Uppercase was clicked")

  const handleUpClick = ()=>{
    console.log("on click")
  }

  const handleOnChange = ()=>{
    console.log("on change")
  }
// tex"new text"; // wrong way to change the state
// setText("new text"); // Correct way to change the statet = 
  return (
    
   <div>
    <h1>{props.heading}</h1>
<div className="mb-3">
    

  <textarea value={text} className="form-control" onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className='btn-btn-primary' onClick={handleUpClick}>Covert to Uppercase</button>
</div>
  )
}
