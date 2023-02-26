import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
