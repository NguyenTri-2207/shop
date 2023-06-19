import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ListCartPayMent from "../../molecules/ListCartPayMent";
import { useParams } from "react-router-dom";
export default function Iphone() {
  let params = useParams();
  const dataCartRedux = useSelector((state) => state.cart);
  const totalCart =
    dataCartRedux.length > 0 &&
    dataCartRedux?.reduce(
      (accumulator, curValue) => accumulator + curValue.quantity,
      0
    );
  const totalPrice =
    dataCartRedux.length > 0 &&
    dataCartRedux?.reduce(
      (accumulator, curValue) =>
        accumulator + curValue.price * curValue.quantity,
      0
    );
  return (
    <div className="container mt-5 mb-10">
      <ListCartPayMent data={dataCartRedux} totalPrice={totalPrice} />
    </div>
  );
}
