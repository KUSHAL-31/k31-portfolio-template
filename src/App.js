import React from "react";
import { PortfolioContextProvider } from "./contexts/PortfolioContextProvider";
import PortfolioWebsite from "./components/main";

function App() {

  return (
    <PortfolioContextProvider>
      <PortfolioWebsite />
    </PortfolioContextProvider>
  );
}

export default App;
