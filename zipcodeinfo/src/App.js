
import './App.css';
import { useSelector } from 'react-redux';
import ZipForm from './Components/ZipForm';
import Location from './Components/Location';
import Navbar from './Components/Navbar';

function App() {
  // Select the 'swap' state from the Redux store using useSelector
  const { swap } = useSelector((store) => store);

  return (
    <div className="App">
      <Navbar />

      {/* Conditional rendering based on the 'swap' state */}
      { !swap ? <ZipForm /> : <Location /> }
    </div>
  );
}

export default App;
