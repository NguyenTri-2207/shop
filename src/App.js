import React from "react";
import Layout from "./component/organisms/Layout";
import Banner from "./component/organisms/Banner";
import MenuBot from "./component/organisms/MenuBot";
import "./App.scss";

function App() {
  return (
    <Layout>
      <Banner />
      <MenuBot />
    </Layout>
  );
}

export default App;
