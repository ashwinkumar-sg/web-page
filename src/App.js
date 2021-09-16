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
  <div>
    <NavBar/>
    <div class="main-content container-fluid bg-light" style={{paddingTop:"100px"}}>

      {/*<div class="col-lg-2 col-4">
        <SideBar/>
      </div> 
      // removed the fixed side bar to make responsive menu buttton
      */}
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
