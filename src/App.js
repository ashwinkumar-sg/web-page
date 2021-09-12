import './App.css';
import MonthlySales from './components/MonthlySales';
import CloudStorage from './components/CloudStorage';
import Inbox from './components/Inbox'
import Projects from './components/Projects';
import NewOrders from './components/NewOrders';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import SideBar from './components/SideBar';

function App() {
  return (
    <div class="bg-light main-content row">



      

      <div class="col-lg-3"><SideBar/></div> 

      <div class="col-lg-9">
          <NavBar/>
          <Welcome/>
          <NewOrders/>


      <div class="row">
          <MonthlySales />
          <CloudStorage />
      </div>

      <div class="row mt-5">
          <Inbox/>
          <Projects/>
      </div>
      </div>
      </div>
    
  );
}

export default App;
