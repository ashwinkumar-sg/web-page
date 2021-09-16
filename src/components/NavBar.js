import React from 'react';
import NavbarMenu from "../my-need/NavbarMenu"

const NavBar = () => {
    return (
        <div>
        
       <nav class="row bg-white fixed-top  border-bottom"   >
            <div class="col-12 col-md-3 d-flex justify-content-between align-items-center border-left border" >
                    <a href="#" class="text-decoration-none" style={{fontWeight: 900,fontSize: "25px",letterSpacing: "-1px",color:"#031a61",textDecoration: "none", backgroundColor: "transparent"}}>
                        Noble<span style={{color: "#727cf5",fontWeight: "300px",fontSize: "25px",fontFamily: "Overpass sans-serif"}}>UI</span>
                    </a> 
                
                    <NavbarMenu/>
                
            </div>
               
            <div class="col-12 col-md-9 d-flex justify-content-between ">
            
						
            <button class="bg-white border-0"><i class="fas fa-search"></i></button>
            <input type="text" class="form-control border-0 " placeholder="Search here..."/>
				
           
            <ul class="d-flex my-auto" style={{listStyle:"none"}}>
            <span>English</span>
            <li  class="px-4"> <i class="far fa-envelope"></i></li>
            <li> <i class="far fa-bell"></i></li>
            <li class="px-4"> <i class="fas fa-th-large"></i> </li>
            <li>  <img class="rounded-circle" alt="100x100" height="30px" weight="30px" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"data-holder-rendered="true"/></li>
            </ul>

            </div>

      </nav>
      </div>
    );
};
export default NavBar;
