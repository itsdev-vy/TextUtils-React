import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log('Upper case was clicked'+ text);
        let newText = text.toLocaleUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!","success")

    }

    const handleLoClick = () => {
        // console.log('Upper case was clicked'+ text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase!","success")


    }

     const handleClearClick = () => {
        let newText = " "
        setText(newText)
        props.showAlert("Text Cleared!","success")


    }

    //built with regex
     const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!","success")
        
        

    }

     const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Text Copied to Clipboard!","success")


    }
    
     const handleOnChange = (event)=> {
        // console.log('On change');
        setText(event.target.value)

    }

    const[text, setText] = useState('');
    

    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} value={text} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Click to Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>


                

            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
                <h3>Your Text Summary</h3>
                <p>{text..split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <p>Preview</p>
                <p>{text.length>0?text:'Nothing to preview!'}</p>
                
            </div>
        </>
    )
}