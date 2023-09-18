import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = (props) => {
  const [resListData, setResListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("Data Fetched");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResListData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterData = () => {
    console.log("jgkj");
    const filtereRes = resListData?.filter((data) => {
      return data.info.avgRating > 4.2;
    });
    setFilteredData(filtereRes);
  };

  const getSearchValue = (e) => {
    setSearchText(e.target.value);
  };

  const searchRes = () => {
    const searchData = resListData.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredData(searchData);
  };

  // check if Online or Offline

  if (onlineStatus === false) return <Offline />;

  // Conditional Rendering
  return resListData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 flex items-center">
          <input
            type="text"
            className="p-2 border border-solid border-gray-200 rounded-md shadow-lg"
            value={searchText}
            onChange={getSearchValue}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 font-semibold cursor-pointer shadow-lg rounded-md"
            onClick={searchRes}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-200 m-4 font-semibold cursor-pointer shadow-lg rounded-md"
            onClick={filterData}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredData?.map((resObject) => {
          console.log(resObject);
          return (
            <Link
              key={resObject?.info?.id}
              to={"/restaurantMenu/" + resObject.info.id}
            >
              <RestaurantCard resDetail={resObject?.info} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
