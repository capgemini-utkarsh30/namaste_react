import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuItem = useRestaurantMenu(resId);

  if (menuItem === null || menuItem === undefined) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuItem?.cards[0]?.card?.card?.info;

  const { itemCards } =
    menuItem?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
