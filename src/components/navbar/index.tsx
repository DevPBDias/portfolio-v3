import { Link, useNavigate } from "react-router-dom"
import { HeaderContainer, NavbarContainer } from "./styles"

function Navbar() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <NavbarContainer>
        <Link className="links" to='/'>Home</Link>
        <Link className="links" to='/about'>About</Link>
        <Link className="links" to='/portfolio'>Portfolio</Link>
        <button
        type="button"
        onClick={ () => navigate('/contact')}
        >Contact</button>
      </NavbarContainer>
    </HeaderContainer>
  )
}

export default Navbar