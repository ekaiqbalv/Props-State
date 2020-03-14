import React from "react";
import "./SeasonPage.css";

const seasonConfig = {
  winter: {
    text: "Brrr, it's chilly!",
    iconName: "snowflake"
  },
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonPage = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`container-season ${season}`}>
      <i className={`massive ${iconName} icon left-top`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon right-bottom`} />
    </div>
  );
};

export default SeasonPage;
