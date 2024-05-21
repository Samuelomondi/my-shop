import './body.scss'
import Card from './cards/card'

const Body = () => {
  return (
    <body>
      <div className="feature">
        <img src="" alt="Feature Image" />
      </div>

      <div className="navigation">
        <h3>New</h3>
        <h3>Sale</h3>
      </div>

      <div className="items">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </body>
  )
}

export default Body