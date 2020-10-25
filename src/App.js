import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* tindercards */}
      <TinderCards />

      {/* swipe buttons */}
    {/* <SwipeButtons /> */}

    </div>
  );
};

export default App;
