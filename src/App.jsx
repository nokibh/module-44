import './App.css';
import NavBer from './Components/NavBer/NavBer';
import DaisyNav from './Components/DaisyNav/DaisyNav';
import PriceOptions from './Components/PriceOptions/PriceOptions';
function App() {
  return (
    <>
      <NavBer></NavBer>
      <DaisyNav></DaisyNav>
      <h1 className="text-7xl bg-slate-100">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
