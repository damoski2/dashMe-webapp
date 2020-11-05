import React from "react";
import style from "./App.module.css";

import { Provider } from "react-redux";
import store from "./store";
import {
  Navbar,
  Carousel,
  AppPreview,
  Services,
  Features,
  NavDrawer,
  Backdrops,
  Team,
  Download,
  Footer,
  Contact_form,
  BackdropsContact,
  ScrollToTop,
  CommentSection,
  CommentRecieved
} from "./components/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={style.App}>
          <Navbar />
          <Backdrops />
          <NavDrawer />
          <Carousel />
          <AppPreview />
          <Services />
          <Features />
          <Team />
          <Download />
          <CommentSection />
          <CommentRecieved />
          <Contact_form />
          <BackdropsContact />
          <ScrollToTop />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
