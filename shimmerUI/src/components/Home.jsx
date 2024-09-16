import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "../App.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const getData = async () => {
    setShowShimmer(true);
    let response = await fetch("https://meme-api.com/gimme/16");
    let jsonData = await response.json();

    setData(jsonData.memes);

    setShowShimmer(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          {data?.map((item, index) => {
            return (
              <img
                className="images"
                key={index}
                src={item.url}
                alt={item.title}
              />
            );
          })}
        {showShimmer && <Shimmer/>}
        </div>
      </div>
      
    </>
  );
};

export default Home;
