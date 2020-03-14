import React from "react";
import "./LoadingPage.css";

const LoadingPage = props => {
  return (
    <div className="ui segment container-loading-page">
      <div className="ui active dimmer">
        <div className="ui text loader">{props.text}</div>
      </div>
      <p></p>
    </div>
  );
};

LoadingPage.defaultProps = {
  text: "Loading..."
};

export default LoadingPage;
