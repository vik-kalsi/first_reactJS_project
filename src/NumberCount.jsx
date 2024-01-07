import { useState } from 'react'

 function NumberCount() {

   const [count, setCount] = useState(0)

   const increaseNumber = () => {
       setCount (count + 1)
   }

   const decreaseNumber = () => {
       setCount (count - 1)
   }

   const resetToZero = () => {
       setCount (0)
   }

   return (
       <div className='border-4 p-6'>
         <p className='text-6xl'>The number is {count}</p>
         <button className='mx-2 mt-6 p-2 border-2' onClick={increaseNumber}>Click to increase</button>
         <button className='mx-2 mt-6 p-2 border-2' onClick={decreaseNumber}>Click to decrease</button>
         <button className='mx-2 mt-6 p-2 border-2' onClick={resetToZero}>Reset</button>
       </div>
     )
   }


export default NumberCount