import logo from "./logo.svg";
import React, { useState } from "react";
import Layout from "./component/organisms/Layout";
import Banner from "./component/organisms/Banner";
import { Context } from "./redux/store";
import "./App.scss";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <Context.Provider value={{ email, name, setEmail, setName }}>
      <Layout>
        <Banner />
      </Layout>
    </Context.Provider>
  );
}

export default App;
