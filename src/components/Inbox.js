import React from 'react';
import  { useState } from 'react';

//https://picsum.photos/200/300?random=1

const Inbox = () => {
  const [user,setuser] = useState([{name:"Karisma",time:"9.0 am",message:"Hi how are you?",image:"https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"},
                                   {name:"Ashwin",time:"9.0 am",message:"Where are you?",image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj_400x400.jpg"},
                                   {name:"Janardhan",time:"9.0 am",message:"good, keep it up",image:"https://rockhealth.com/wp-content/uploads/2019/03/aditya-square-headshot.jpg"},
                                   {name:"Joseph",time:"9.0 am",message:"Nice to meet you!",image:"https://www.nicesnippets.com/demo/profile-1.jpg"},
                                  ])
    return (               
      <div  class="col-12 col-lg-5 card">   
              
                <div class="d-flex justify-content-between align-items-baseline p-3 mb-2">
                  <h6 class="card-title mb-0">Inbox</h6>
                  <div class="dropdown mb-2">
                    <button class="bg-white border-0">
                    <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>  
                </div>     
    { user.map((user)=>
        {
          return(
                <div class="d-flex flex-column">
                  <a href="#" class="d-flex align-items-center border-bottom text-decoration-none p-2">
                    <div class="mx-3">
                      <img class="rounded-circle" alt="100x100" height="50px" weight="50px" src={user.image} data-holder-rendered="true"/>                    
                    </div>
                    <div class="w-100">
                      <div class="d-flex justify-content-between  align-items-center ">
                        <h6 class="text-body mb-0">{user.name}</h6>
                        <p class="text-muted tx-12 mb-0">{user.time}</p>
                      </div>
                      <p class="text-muted tx-13 mb-0">{user.message}</p>
                    </div>
                  </a>
                </div>
          )})}
          </div>
    )
        }

export default Inbox;
