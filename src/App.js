import logo from './images/sw-logo.png'

function App() {
  return(
    <div className="bg-[url('./images/star-lines.jpg')] w-full h-screen bg-cover bg-center">
      <div className="container">
        <div className='flex items-center justify-center hscreen pt-6'>
          <img src={logo} alt='Star Wars logo' className='lg:w-3/5 md:w-full' />
        </div>
        <div className="container">
          <div className="flex items-center justify-center hscreen mt-12">
            <p>Characters</p>
            <p>Planets</p>
            <p>Species</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
