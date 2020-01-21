import React from "react";
import "./App.css";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleRoom";
import Error from "./pages/error";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
