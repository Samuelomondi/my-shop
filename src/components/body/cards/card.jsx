import './card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
  return (
    <card>
      <div className="image">
        <img className='image' src="" alt="Product Image" />
      </div>

      <div className="name-cart">
        <p className='name'>Product Name</p>
        <FontAwesomeIcon icon={faHeart} className='cart'/>
      </div>

      <p className='desc'>Material/Color/Size</p>
      <p className="price">KES 0.00</p>

    </card>
  )
}

export default Card