import './header.scss'
import Logo from '../../assets/logo.png'
import Cart from '../../assets/cart.png'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo"/>
      <h2>Varsity Wear</h2>
      <img src={Cart} alt="Cart"/>
    </header>
  )
}

export default Header