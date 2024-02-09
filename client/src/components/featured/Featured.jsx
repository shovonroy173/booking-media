import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.css";

const Featured = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const getCityProperty = async () => {
      const res = await axios.get("http://localhost:5000/api/city/");
      setCities(res.data);
    };
    getCityProperty();
  }, []);
  //  cities.map((city)=>{
  //   console.log(city);
  // });
  console.log("LINE AT 17", cities[0]?.img);
  return (
    <div className="featured">
      {cities?.map((city) => {
        <div className="featuredItem">
          <img src={city?.img} alt="img" className="featuredImg" />
          <div className="featuredTitles">
            <h1>{city?.name}</h1>

            <h2>{city?.properties} properties</h2>
          </div>
        </div>;
      })}

      <div className="featuredItem">
        <img src={cities[0]?.img} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>{cities[0]?.name}</h1>
          <h2>{cities[0]?.properties} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={cities[1]?.img} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>{cities[1]?.name}</h1>
          <h2>{cities[1]?.properties} properties</h2>
        </div>
      </div><div className="featuredItem">
        <img src={cities[2]?.img} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>{cities[2]?.name}</h1>
          <h2>{cities[2]?.properties} properties</h2>
        </div>
      </div>
    </div>
    // <div className="featuredItem">
    //   <img
    //     src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
    //     alt=""
    //     className="featuredImg"
    //   />
    //   <div className="featuredTitles">
    //     <h1>Austin</h1>
    //     <h2>532 properties</h2>
    //   </div>
    // </div>
    // </>
    // <>
    // <h1>city?.name</h1>
    // <> {data?.map((city) => {
    //   console.log(city.name);
    //   <h1>{city?.name}</h1>
    // })}</>
    // </>
    // </div>
  );
};

export default Featured;
