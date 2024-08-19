import React from 'react';
import NavBar from './components/Header/NavBar.jsx';
import Card from './components/Cards/cards.jsx';
import img1 from './images/opp.jpeg'; 
import img2 from '../src/images/deadpool.jpeg';
import img3 from '../src/images/fallout.jpg';
import img4 from '../src/images/interstellar.jpg';
import Footer from './components/Footer/footer.jsx';

function App() {
  return (
    <div>
      <div className="header">
        <NavBar 
          first="Home" 
          second="About" 
          third="Services" 
          fourth="Contact"
        />
      </div>
    
      <div className="card-container">
        <Card 
          image={img1} 
          title="Oppenheimer" 
          text="Ethan Hunt and his team race against time after a mission goes wrong, delivering high-octane action and stunts in this thrilling spy adventure"
        />
        <Card 
          image={img2} 
          title="Deadpool" 
          text="A wisecracking mercenary with accelerated healing powers, Deadpool takes on a mission of revenge in this irreverent and action-packed superhero comedy.."
        />
        <Card 
          image={img3} 
          title="Fallout" 
          text="Ethan Hunt and his team race against time after a mission goes wrong, delivering high-octane action and stunts in this thrilling spy adventure"
        />
        <Card 
          image={img4} 
          title="Interstellar" 
          text="A group of astronauts ventures through a wormhole in search of a new home for humanity, exploring love, sacrifice, and survival across the vastness of space"
        />

      </div>
      <Footer/>
    </div>
  );
}

export default App;
