import React,{useState} from 'react';


export default function TextForm(props) {
  const handleUpclick = ()=>{
    console.log("Upper case was clicked"+ text);
    let newtext= text.toUpperCase();
    
      
      setText(newtext)
     props.showAlert("the upper has been enabled","success");
      
    
  }
  const handleLoclick = ()=>{
    console.log("Upper case was clicked"+text);
    let newtext=text.toLowerCase();
    
      
      setText(newtext)
     props.showAlert("the lower case has been enabled","success");
  }
    
  const handleClearclick = ()=>{
    console.log("Clear case was clicked"+text);
    let newtext="";
    
      
      setText("newtext")
      props.showAlert("your text has been  cleared  ","success");
     
  }
  // const handleParaclick = ()=>{
  //   console.log("Upper case was clicked"+text);
  //   let newtext=text.toLowerCase();
    
      
  //     setText(newtext)
  // }
  
  const handleOnChange = (event)=>{
    
    console.log("On Change");
    setText(event.target.value);

  }
  const handleCopy=()=>{
    console.log("i am copy");

    var text=document.getElementById("myBoxs")
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("your copied to clipboard ","success");
    

  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("there is no extra space","success");
    

    

  }
   const [text, setText] = useState('Enter text here now');
  return (
    <>
<div className="container -5" style={{color:props.mode==='dark'?'white':'black'}}>    
    <h2>{props.heading}</h2>
<div className="mb-5">
  {/* <label for="my Box" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'green':'white',color:props.mode==='dark'?'white':'black'}}id="myBoxs" rows="10"></textarea>
  {/* <textarea className="form-control" onChange={handleOnchange} id="my Boxs" rows="10"></textarea> */}
</div>
<button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear</button>
{/* <button className="btn btn-primary mx-2" onClick={handleParaclick}>NewPara</button> */}
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>

</div>
<div className="container my-2"style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"enter something here to Preview"}</p>
  </div>

</>
  )
}
