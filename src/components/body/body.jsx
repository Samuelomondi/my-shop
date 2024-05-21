import './body.scss'
import Card from './cards/card'
import Dress from '../../assets/dress.jpg'

const Body = () => {
  return (
    <body>
    
      <div className="feature">
        <img 
          src="https://images.pexels.com/photos/20164322/pexels-photo-20164322/free-photo-of-woman-walking-past-a-market-stall-with-elegant-dresses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Feature Image" />
      </div>

      <div className="navigation">
        <h3>New</h3>
        <h3>Sale</h3>
      </div>

      <div className="items">
        <Card
        image = {Dress}
        name = 'Sun Dress'
        desc = 'Material: Cotton | Color: Pink | Size: 8-10'
        price = 'KES 2,500.00' />
      </div>

    </body>
  )
}

export default Body