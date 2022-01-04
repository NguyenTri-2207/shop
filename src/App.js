import React, { useState } from "react";
import Layout from "./component/organisms/Layout";
import Banner from "./component/organisms/Banner";
import MenuBot from "./component/organisms/MenuBot";
import { Routes, Route } from "react-router-dom";
import Contact from "./component/Tempalate/Contact";
import "./App.scss";
import { LoginContex } from "./component/context";

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
        </Routes>
      </Layout>
    </LoginContex.Provider>
  );
}

export default App;
