import React, { useState } from 'react';
import image1 from '../images/barchart.png'
import image2 from '../images/linechart1.png'
import image3 from '../images/linechart2.png'


const NewOrders = () => {
    const [cards,setCards] = useState([{title:"New Customer",amount:"35,084",percentage:"+3.3%",image:image2},
                                       {title:"New Orders",amount:"27,000",percentage:"-2.8%",image:image1},
                                       {title:"Growth",amount:"45,084",percentage:"+2.8%",image:image3},
                                      ])
    return (
      <div class="row mb-5">
        {cards.map((card,index)=>
            {
              return(
                <div key={index} class="col-12 col-lg-4 grid-margin stretch-card">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">{card.title}</h6>
                          
                      <div class="dropdown mb-2">
                        <button class="btn p-0" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-h"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-md-12 col-xl-5">
                        <h3 class="mb-2">{card.amount}</h3>
                        <div class="d-flex align-items-baseline">
                          <p class="text-danger">
                            <span>{card.percentage}</span>
                          </p> 
                        </div>
                      </div>

                    <div class="col-6 col-md-12 col-xl-7">
                        <img class="card-img" src={card.image} alt="graph"/>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              )
        })}
        </div>
    )}
export default NewOrders