import { useState } from 'react'

function YesOrNo() {
   const [output, setOutput] = useState(true)


   const toggleYesOrNo = () => {
       output ? setOutput(false) : setOutput(true)
   }


   return (
       <div className='border-4 p-6'>
           {output ? <p className='text-6xl'>Yes</p> : <p className='text-6xl'>No</p>}
           <button className='mx-2 mt-6 p-2 border-2' onClick={toggleYesOrNo}>Toggle</button>
       </div>
   )
}


export default YesOrNo