import './App.css';
import NavBar from './components/NavBar/NavBar';
import BestSeller from './components/BestSeller/BestSeller';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar section component */}
      <NavBar />

      {/* Best Seller section component */}
      <BestSeller />

      {/* Why Choose Us section component */}
      <WhyChooseUs />
    </div>
  );
}

export default App;
