import { Link } from "react-router-dom"
import { HeaderContainer, NavbarContainer } from "./styles"

function Navbar() {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <Link className="links" to='/'>Home</Link>
        <Link className="links" to='/about'>About</Link>
        <Link className="links" to='/portfolio'>Portfolio</Link>
        <button>Contact me!</button>
      </NavbarContainer>
    </HeaderContainer>
  )
}

export default Navbar