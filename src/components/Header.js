import logo from '../images/sw-logo.png'

function Header() {
  return (
    <>
      <div className='flex items-center justify-center hscreen pt-6'>
        <img src={logo} alt='Star Wars logo' className='lg:w-3/5 md:w-full' />
      </div>
      <div className="container">
        <div className="flex items-center justify-center hscreen mt-12">
          <div className="columns-3">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Header