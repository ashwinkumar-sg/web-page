import React from 'react';


const SideBar = () => {
  // vertical navigation bar
    return (
        <div>
          <div class=" bg-white" id="sidebar" style={{position:"fixed"}}>

            <div  class="sidebar-body mt-4 ">

              <p class="text-gray font-weight-bold text-uppercase px-3 small  mb-0"> web apps</p>
              <ul class="nav flex-column bg-white  mb-4">
                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                    <i class="far fa-envelope  text-primary" style={{marginRight:"16px"}}></i>
                    Email
                    </a>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="far fa-comment-alt" style={{marginRight:"16px"}}></i>                    
                  Comment
                    </a>
                </li>
                
                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="far fa-calendar mr-1" style={{marginRight:"16px"}}></i>                    
                  Callender
                    </a>
                </li>
              </ul>

              <p class="text-gray font-weight-bold text-uppercase px-3 small  mb-0"> components</p>

              <ul class="nav flex-column bg-white mb-4">
                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="fab fa-uikit" style={{marginRight:"16px"}}></i>                    
                  UI kit
                    </a>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="fas fa-anchor" style={{marginRight:"16px"}}></i>
                  Addvance UI
                    </a>
                </li>
                
                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="far fa-calendar" style={{marginRight:"16px"}}></i>                    
                  Forms
                    </a>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="fas fa-chart-pie" style={{marginRight:"16px"}}></i>
                  Charts
                    </a>
                </li>
                
                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="fas fa-table" style={{marginRight:"16px"}}></i>
                  Table
                </a>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="far fa-smile-wink" style={{marginRight:"16px"}}></i>                  
                  Icons
                </a>
                </li>
              </ul>

              <p class="text-gray font-weight-bold text-uppercase px-3 small  mb-0">pages</p>
              <ul class="nav flex-column bg-white mb-4">
                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="fas fa-mobile" style={{marginRight:"16px"}}></i>
                    Special pages
                    </a>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="far fa-sticky-note" style={{marginRight:"16px"}}></i>
                  Authentication
                    </a>
                </li>
                
                <li class="nav-item">
                  <a href="#" class="nav-link text-dark ">
                  <i class="far fa-calendar" style={{marginRight:"16px"}}></i>                    
                  Error
                    </a>
                </li>
              </ul>

            </div>


          </div>
        </div>
    );
};

export default SideBar;