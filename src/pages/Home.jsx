import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="row">
      {data ? (
        data.map((ele, index) => (
          <MemeCard title={ele.name} image={ele.url} key={index} />
        ))
      ) : (
        <p>No memes</p>
      )}
    </div>
  );
};

export default HomePage;
