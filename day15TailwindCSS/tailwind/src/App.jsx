import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Navbar/>
    <div>
      <p className='text-red-600 bg-sky-400'>hello react</p>
    </div>
    {/* <div className='flex items-center w-[800px] h-[800px] bg-black justify-center gap-[45px]'>
      <div className='w-[150px] h-[150px] bg-sky-700'>box 1</div>
      <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
      <div className='w-[150px] h-[150px] bg-yellow-700'>box 3</div>
    </div> */}
    <div className='grid w-[100%]  grid-cols-1 m-auto md:grid-cols-3 lg:grid-cols-5 gap-[25px]'>
    <div className='box-1 w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='box-1 w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='box-1 w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='box-1 w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='m-auto w-[150px] h-[150px] bg-red-700'>box 3</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    <div className='w-[150px] h-[150px] bg-red-700'>box 2</div>
    </div>
    </>
  )
}

export default App