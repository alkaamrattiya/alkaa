import './App.css';
import Header from "./components/Header/Header";
import AboutUs from './components/AboutUs/AboutUs';

import Stats from "./components/Stats/Stats";
import Work from "./components/Work/Work";
import WorkProcess from './components/WorkProcess/WorkProcess';
import Services from "./components/Services/Services";
import Testimonials from './components/Testimonials/Testimonials';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="holder">
      <Header />
      <AboutUs />
      
      <Stats />
      <Work />
      <WorkProcess />
      <Services />
      <Testimonials />
      
      <Footer />
    </div>
  );
}

export default App;
