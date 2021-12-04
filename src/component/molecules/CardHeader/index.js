import React from "react";
import "./index.scss";
const CardHeader = ({ title, onClick, styless }) => {
  return (
    <button onClick={onClick} style={styless} className="cardHeader">
      <span> {title}</span>
    </button>
  );
};
export default CardHeader;
