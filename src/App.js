import React, { useState } from "react";
import Layout from "./component/organisms/Layout";
import Banner from "./component/organisms/Banner";
import MenuBot from "./component/organisms/MenuBot";
import { Routes, Route } from "react-router-dom";
import Contact from "./component/Tempalate/Contact";
import "./App.scss";
import { LoginContex } from "./component/context";
import Iphone from "./component/Tempalate/Iphone";
import Payment from "./component/Tempalate/payment";
import SliderProduct from "./component/organisms/SliderProduct";
import Product from "./component/organisms/Product";

function App() {
  const [login, setLogin] = useState(false);
  const [userSucsecss, setUserSucsecss] = useState(null);
  return (
    <LoginContex.Provider
      value={{ login, userSucsecss, setUserSucsecss, setLogin }}
    >
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <SliderProduct />
                <MenuBot />
                {/* <Product title="ĐIỆN THOẠI NỔI BẬT NHẤT" /> */}
              </>
            }
          />
          <Route path="/login" element={<Contact />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="thanh-toan" element={<Payment />} />
        </Routes>
      </Layout>
    </LoginContex.Provider>
  );
}

export default App;
