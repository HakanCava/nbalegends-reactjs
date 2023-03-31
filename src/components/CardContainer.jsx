import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [inputVal, setInputVal] = useState(null);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="container">
      <div className="input">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search Player..."
          value={inputVal}
        />
      </div>
      <div className="container-card">
        {" "}
        {inputVal
          ? data
              .filter((item) =>
                item.name
                  .toLocaleLowerCase()
                  .includes(inputVal.toLocaleLowerCase())
              )
              .map((item) => <PlayerCard {...item} />)
          : data.map((item) => <PlayerCard {...item} />)}
      </div>
    </div>
  );
};

export default CardContainer;

// const datam=val?data.filter((item)=>item.name.toLocaleLowerCase().includes(val.toLocaleLowerCase())):data
// !val?data.map((item)=><PlayerCard {...item}/>):
// {datam.map((item)=><PlayerCard {...item}/>)}
