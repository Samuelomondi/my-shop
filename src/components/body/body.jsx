import "./body.scss";
import Card from "./cards/card";
import CardData from './card-data'
import Dress from "../../assets/dress.jpg";

const Body = () => {
  return (
    <body>
      <div className="feature">
        <img
          src="https://images.pexels.com/photos/20164322/pexels-photo-20164322/free-photo-of-woman-walking-past-a-market-stall-with-elegant-dresses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Feature Image"
        />
      </div>

      <div className="navigation">
        <h3>New</h3>
        <h3>Sale</h3>
      </div>

      <div className="items">
        {CardData.map((val, ind) => {
          return (
            <Card
              key={ind}
              picture={val.picture}
              name={val.name}
              description={val.description}
              price={val.price}
            />
          );
        })}
      </div>
    </body>
  );
};

export default Body;
