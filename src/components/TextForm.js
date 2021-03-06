import React,{useState} from 'react'

export default function TextForm(props) {
  const [bold, setbold] = useState("400")
  

  const [ita1, setita1] = useState("normal")

  const handleUpClick =()=>{
    console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick =()=>{
    console.log("LOWERcase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleClClick =()=>{
    console.log("clear was clicked"+text);
    let newText=" ";
    setText(newText);
    props.showAlert("Text cleared!","success");
  }
  const handleCopy=()=>{
    var text=document.getElementById("txt")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");
  }
  const handlebold=()=>{
    setbold("900");
    props.showAlert("Converted to BOLD","success");
    
  
  }
  const handleita=()=>{
    setita1("italic");
    
    props.showAlert("Converted to ITALICS","success");
  }
 // const handleSearchClick =()=>{
   // let str =document.getElementById("word");
   // console.log(str.value);
   // let search=str.value;
   // console.log(search);
   //  let para={text};
   //  let texta =  JSON.stringify(para);
    // console.log(texta);
    // console.log(texta.indexOf(search))
     //
    //  let st=document.getElementById("rk");
   // st.innerText=texta.indexOf(search);
         // let newText=" ";
   // setText(newText);
  //}
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  const handleremove=()=>{
    let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("EXTRA SPACE REMOVED","success");
  } 

    const [text,setText]=useState('');
 
 
    let i=0,count=0;
    let run;
    for(i=0;i<text.length;i++){
      if(text[i]==" "){
count++;
      }
    }
    run=text.length-count;
    return (
      <>
      
 
        <h1 style={{color:props.mode==='dark'?'greenyellow':'rgb(49, 37, 38)'}||{color:props.redmode==='ultradark'?'black':'rgb(49, 37, 38)'}} id="head" >{props.heading}</h1>
<div className="mb-3">
  
 
  <textarea className="form-control area" style={{backgroundColor:props.mode==='dark'?'#13466E':'white',color:props.mode==='dark'?'white':'black' ,fontStyle:ita1, fontWeight:bold}}  value={text} onChange={handleOnChange} id="txt" rows="8"></textarea>
</div>
<div className="container  col-sm-12 " >
  
  
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}
        >convert to uppercase
        
        </button>
             <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleLoClick}
        >convert to lowercase</button>
          <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClClick}
        >clear text</button>
       
        <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCopy}
        >Copy</button>
             <button disabled={text.length===0}className="btn btn-success mx-2 my-2" onClick={handlebold}
        >Bold</button>
         <button disabled={text.length===0}className="btn btn-dark mx -2 my-2" onClick={handleita}
        >Italic</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleremove}
        >Remove Space</button>
        </div>
    
        <div className="container my-4">
          
          <h4 id="top">Your text summary</h4>
          
          
          <p id="white" style={{color:props.mode==='dark'?'white':'black'}}> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {run} characters</p>
          <p id="white" style={{color:props.mode==='dark'?'white':'black'}}>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
          
      
  <h4 id="top">Preview</h4>
          <p id="white" style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"ENTER SOMETHING IN THE TEXTBOX ABOVE TO PREVIEW IT HERE"}</p>
        </div>

        </>
    )
}
