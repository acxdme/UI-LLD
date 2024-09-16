import { useEffect, useState } from "react";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCardData = async () => {
    if (isLoading) return; // Prevent fetching data if already loading
    setIsLoading(true);
    try {
      const res = await fetch("https://meme-api.com/gimme/12");
      const data = await res.json();
      console.log(data.memes);

      setData((prevData) => [...prevData, ...data.memes]);
    } catch (err) {
      console.log("Error in api ", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    //window.scrollY + window.innerHeight >= document.body.scrollHeight
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 100
    ) {
      getCardData();
    }
  };

  useEffect(() => {
    getCardData();

    // attach event listener
    document.addEventListener("scroll", handleScroll);

    // cleanup
    return () => document.removeEventListener("scroll");
  }, []);

  return (
    <>
      <div className="mainContainer">
        {data?.map((item, index) => {
          return <Card info={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
