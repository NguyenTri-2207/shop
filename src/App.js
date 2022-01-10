import React, { useState } from "react";
import Layout from "./component/organisms/Layout";
import Banner from "./component/organisms/Banner";
import MenuBot from "./component/organisms/MenuBot";
import { Routes, Route } from "react-router-dom";
import Contact from "./component/Tempalate/Contact";
import "./App.scss";
import { LoginContex } from "./component/context";
import Iphone from "./component/Tempalate/Iphone";

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
                <MenuBot />
              </>
            }
          />
          <Route path="/login" element={<Contact />} />
          {/* <Route path="/iphone" element={<div><Iphone /></div>}>
            <Route path="12" element={<div>9</div>} />
            <Route path="sent" element={<div>10dff dfdfdff</div>} />
          </Route> */}
          <Route path="iphone" element={<Iphone />} />
        </Routes>
      </Layout>
    </LoginContex.Provider>
  );
}

export default App;
