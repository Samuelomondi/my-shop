/* eslint-disable react/prop-types */
import './card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
  return (
    <card>
      <div className="image">
        <img className='image' src={props.picture} alt="Product Image" />
      </div>

      <div className="name-cart">
        <p className='name'>{props.name}</p>
        <FontAwesomeIcon icon={faHeart} className='cart'/>
      </div>

      <p className='desc'>{props.description}</p>
      <p className="price">{props.price}</p>

    </card>
  )
}

export default Card