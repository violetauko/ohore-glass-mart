// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
// import Nav from './Components/Navbar/Nav';
// import Main from './Components/Main/Main';
// import Home from './Components/Home/Home';
// import Footer from './Components/Footer/Footer';
// import OurServices from './Components/OurServices/OurServices';
// import OurWork from './Components/OurWork/OurWork';
// import AboutUs from './Components/AboutUs/AboutUs';
// import Reviews from './Components/Reviews/Reviews';

// function App() {
//   return (
//     <div className="App">
//       <h1>jjj</h1>
//       <Router>
//         <Nav />
//         <Home />
//         <Main />
//         <OurServices />
//         <OurWork />
//         <AboutUs />
//         <Reviews />
//         <Footer />
//       </Router>

//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Navbar/Nav';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import OurServices from './Components/OurServices/OurServices';
import OurWork from './Components/OurWork/OurWork';
import AboutUs from './Components/AboutUs/AboutUs';
import Reviews from './Components/Reviews/Reviews';
import Contacts from './Components/Contacts/Contacts';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Home />
        <Main />
        <AboutUs />
        <OurWork />
        <Contacts />
        <Reviews />
        <Footer />
      </Router>
    </div>

  )
}

export default App