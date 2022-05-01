import Nav from 'react-bootstrap/Nav'
import logo from '../../images/sw-logo.png'
import './header.css'

function Header() {
  return (
    <>
      <div className="container pt-4">
        <img src={logo} alt='Star Wars logo' className='logo' />
      </div>
      <Nav className="justify-content-center pt-5">
        <Nav.Item>
          <Nav.Link href="/character">Characters</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/planets">Planets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/species">Species</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Header