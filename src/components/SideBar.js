import React from 'react';

const SideBar = () => {
    return (
        <div>
            <nav class="sidebar">
            <div class="sidebar-header d-flex justify-content-between p-3 flex-row align-items-center" style={{height:"68px"}} >
                    <a href="#" class="text-decoration-none" style={{fontWeight: 900,fontSize: "25px",letterSpacing: "-1px",color:"#031a61",textDecoration: "none", backgroundColor: "transparent"}}>
                        Noble<span style={{color: "#727cf5",fontWeight: "300px",fontSize: "25px",fontFamily: "Overpass sans-serif"}}>UI</span>
                    </a> 
                    <i class="fas fa-bars"></i>
            </div>

            <div class="sidebar-body nav ps">
                <ul class="text-decoration-none">
                    <li class="nav-item nav-category">Main</li>

                    <li class="nav-item ">
                       <a href="dashboard-one.html" class="nav-link">
                          <span class="link-title">Dashboard</span>
                       </a>
                    </li>
                    <li class="nav-item nav-category">web apps</li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">
                            <span class="link-title">Email</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="pages/apps/chat.html" class="nav-link">
                            <span class="link-title">Chat</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="pages/apps/calendar.html" class="nav-link">
                            <span class="link-title">Calendar</span>
                        </a>
                    </li>
                    <li class="nav-item nav-category">Components</li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#uiComponents" role="button" aria-expanded="false" aria-controls="uiComponents">
                              <span class="link-title">UI Kit</span>
                        </a>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#advancedUI" role="button" aria-expanded="false" aria-controls="advancedUI">
                              <span class="link-title">Advanced UI</span>
                        </a>
                    </li>
                   <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#forms" role="button" aria-expanded="false" aria-controls="forms">
                              <span class="link-title">Forms</span>
                        </a>
                   </li>

                   <li class="nav-item">
                      <a class="nav-link" data-toggle="collapse" href="#charts" role="button" aria-expanded="false" aria-controls="charts">
                              <span class="link-title">Charts</span>
                      </a>
           
                   </li>

                   <li class="nav-item">
                      <a class="nav-link" data-toggle="collapse" href="#tables" role="button" aria-expanded="false" aria-controls="tables">
                              <span class="link-title">Table</span>
                      </a>
            
                   </li>

                   <li class="nav-item">
                      <a class="nav-link" data-toggle="collapse" href="#icons" role="button" aria-expanded="false" aria-controls="icons">
                             <span class="link-title">Icons</span>
                      </a>
                  </li>
                  <li class="nav-item nav-category">Pages</li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#general-pages" role="button" aria-expanded="false" aria-controls="general-pages">
              <span class="link-title">Special pages</span>
            </a>
            </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#authPages" role="button" aria-expanded="false" aria-controls="authPages">
              <span class="link-title">Authentication</span>
            </a>
           
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#errorPages" role="button" aria-expanded="false" aria-controls="errorPages">
              <span class="link-title">Error</span>
            </a>
            
          </li>
          <li class="nav-item nav-category">Docs</li>
          <li class="nav-item">
            <a href="" target="_blank" class="nav-link">
              <span class="link-title">Documentation</span>
            </a>
          </li>
        </ul>
      <div class="ps__rail-x" ><div class="ps__thumb-x" tabindex="0" ></div></div><div class="ps__rail-y" ><div class="ps__thumb-y" tabindex="0" ></div></div></div>
    </nav>
        </div>
    );
};

export default SideBar;