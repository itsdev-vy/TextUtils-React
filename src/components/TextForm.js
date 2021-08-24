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
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} value={text} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Click to Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>


                

            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <p>Preview</p>
                <p>{text.length>0?text:'Enter something in the textbox to preview it here'}</p>
                
            </div>
        </>
    )
}
