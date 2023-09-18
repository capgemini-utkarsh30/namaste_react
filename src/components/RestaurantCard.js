import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  console.log(props);
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = props.resDetail;

  return (
    <div className="- bg-gray-100 m-4 p-4 w-[250] rounded-lg break-words hover:shadow-2xl">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4">
        <span className="font-bold">Name: </span>
        {name}
      </h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>
        <span className="font-bold">Rating:</span>
        {avgRating}
      </h4>
      <h4>
        <span className="font-bold">EOD:</span>
        {deliveryTime} Mins
      </h4>
      <h4>
        <span className="font-bold">Cost For two:</span>₹{costForTwo}
      </h4>
    </div>
  );
};

export default RestaurantCard;
