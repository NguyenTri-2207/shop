import React, { useState } from "react";
import Layout from "./component/organisms/Layout";
import Banner from "./component/organisms/Banner";
import MenuBot from "./component/organisms/MenuBot";
import "./App.scss";
import { LoginContex } from './component/context'

function App() {
  const [login, setLogin] = useState(false)
  const [userSucsecss, setUserSucsecss] = useState(null);
  return (
    <LoginContex.Provider value={{ login, userSucsecss, setUserSucsecss, setLogin }}>
      <Layout>
        <Banner />
        <MenuBot />
      </Layout>
    </LoginContex.Provider>
  );
}

export default App;
