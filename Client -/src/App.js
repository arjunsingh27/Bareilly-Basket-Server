import React from "react";
import Header from "./component/navbar/Header.jsx";
import Home from "./component/Home/Home.jsx";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopHeadline from "./TopHeadline.jsx";
const App = ()=> {

const AppContainer = styled.div`
text-align:center;
 
`;

  return (
    <AppContainer>
    <Router>
      <div className="App">
         <TopHeadline/>
        <Header />
        <Switch>
        <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </AppContainer>
  );
}

export default App;