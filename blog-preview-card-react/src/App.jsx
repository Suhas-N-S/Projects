import './App.css'

function App() {

  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <div  id="shadow" className='flex flex-col border border-black bg-white max-w-80 rounded-3xl '>
          <img src="/src/assets/images/image.svg" alt="" className='rounded-3xl p-4' />
          <div className='mx-4 bg-yellow-300 w-fit rounded-md'>
            <p className='font-medium px-3 py-1'>Learning</p>
          </div>
          <div className='mx-4 w-fit'>
            <p className='my-4 text-xs font-semibold'>Published 21 Dec 2023</p>
          </div>
          <div className='mx-4 w-fit'>
            <p className='text-2xl font-bold hover:text-yellow-500 cursor-pointer'>HTML & CSS foundations</p>
          </div>
          <div className='mx-4 w-fit'>
            <p className='my-4 text-md text-colo'>
              These languages are the backbone of every website, defining structure, content, and presentation
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
