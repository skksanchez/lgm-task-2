import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage';
import InfiniteScrollerWithReactInfiniteScroller from "./Components/Scroll";
import FloatButton from "./Components/FloatButton";
class App extends React.Component {
  

  render() {
  return (
    <>
      <Navbar />
      <Homepage />
      <FloatButton />
        <InfiniteScrollerWithReactInfiniteScroller />
        <a id="main"/>
    </>
  );
}
}
export default App;
