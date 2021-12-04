import React from "react";
import './App.css';
import { Header } from "./components/pages/Header";
import {Video} from "./components/pages/video/video"
import {Widgets} from "./components/pages/widgets/widgets";
import {Footer} from "./components/pages/footer/footer"

function App() {
  return (
    <div className="App">
 
     <Header />
     <Video />
     <Widgets />
     <Footer />
   
    </div>
  );
}

export default App;
