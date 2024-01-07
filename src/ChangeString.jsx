import { useState } from 'react'


function ChangeString() {

    const [text, setText] = useState("Hello World!")

    const changetoBye = () => {
        setText("Text Changed!")
    }
 
    const changeTextBack = () => {
        setText("Hello World!")
    }
 
    return(
        <div className='border-4 p-6'>
            <p className='text-6xl'>{text}</p>
            <button className='mx-2 mt-6 p-2 border-2' onClick={changetoBye}>Change Text</button>
            <button className='mx-2 mt-6 p-2 border-2' onClick={changeTextBack}>Change Text Back</button>
        </div>
    )
}
 
 
 export default ChangeString