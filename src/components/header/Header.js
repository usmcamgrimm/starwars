import logo from '../../images/sw-logo.png'
import './header.css'

function Header() {
  return (
    <>
      <div className='container'>
        <img src={logo} alt='Star Wars logo' className='logo' />
      </div>
      <div className="nav">
        <div className="nav-links">
          <p className="link-text">
            Characters
          </p>
          <p className="link-text">
            Planets
          </p>
          <p className="link-text">
            Species
          </p>
        </div>
      </div>
    </>
  )
}

export default Header