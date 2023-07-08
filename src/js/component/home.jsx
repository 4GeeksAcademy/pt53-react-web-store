import React from "react";

import { productData } from "../products.js";

//create your first component
const Home = () => {
  return <div className="text-center">{JSON.stringify(productData)}</div>;
};

export default Home;
