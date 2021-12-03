import React from "react";
import "./index.scss";
const CardHeader = ({ title, onClick, styless }) => {
  return (
    <button style={styless} onClick={onClick} className="cardHeader">
      {title}
    </button>
  );
};
export default CardHeader;
