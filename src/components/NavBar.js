import React from 'react';

const NavBar = () => {
    return (
        <div>
        
       <nav class="navbar navbar-expand-lg d-flex justify-content-between p-3 flex-row">
               

            <form class="input-group">
						
            <button class="bg-white border-0"><i class="fas fa-search"></i></button>
            <input type="text" class="form-control border-0 " placeholder="Search here..."/>
						
			</form>
           
            <ul class="d-flex my-auto" style={{listStyle:"none"}}>
            <span>English</span>
            <li  class="px-4"> <i class="far fa-envelope"></i></li>
            <li> <i class="far fa-bell"></i></li>
            <li class="px-4"> <i class="fas fa-th-large"></i> </li>
            <li>  <img class="rounded-circle" alt="100x100" height="30px" weight="30px" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"data-holder-rendered="true"/></li>
            </ul>

      </nav>
      </div>
    );
};
export default NavBar;
