import './App.css';
import Walp from './components/bgImg/Walp'
import Header from './components/Header/Header'
import Menu from './components/FoodMenu/Menu'
import Order from './components/Orders/Orders';


function App() {
  
  return (
    <div>
      <div style = {{height:"100vh", width:"100%"}}>
      <Walp />
      <Header />
      <Menu />
      </div>
      <Order />
    </div>
  );
}

export default App;
