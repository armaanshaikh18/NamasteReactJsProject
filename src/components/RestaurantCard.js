import foodLogo from "../images/biryani.jpg";

const RestaurantCard = () => {
  return (
    <div className="res-items">
      <img className="foodLogo" src={foodLogo} alt="foods-items" />
      <h3>Sahara Hotel</h3>
      <h4>biryani,Indian,Rice</h4>
      <h4>4.5 Stars</h4>
    </div>
  );
};

export default RestaurantCard;
