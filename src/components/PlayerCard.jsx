import { useState } from "react";


const PlayerCard = (props) => {
  const { name, img, statistics } = props;

  const [isBool, setIsBool] = useState(true);
    

  const handleClick = () => {
    setIsBool(!isBool);
  };
  return (
    <div onClick={handleClick} className="card">
      
        {isBool ? (
          <img className="card-photo" src={img} alt={name} />
        ) : (
          <div className="card-statistic">
            {statistics.map((state) => (
              <div className="state">🏀{state}</div>
            ))}
          </div>
        )}
      <p>{name}</p>
    </div>
  );
};

export default PlayerCard;
