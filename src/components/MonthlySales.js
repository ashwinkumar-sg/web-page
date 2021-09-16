
import React from 'react';
import {Bar} from "react-chartjs-2"

const MonthlySales = () => {
    return (
        <div class="col-xl-8 grid-margin stretch-card">
            <div class="card p-3 h-100 ">
                <div class="card-body">
                <div class="card-title d-flex justify-content-between align-items-baseline mb-2">
                    <h6>Monthly sales</h6>
                    <button class="btn p-0" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
 
                <p class="text-muted mb-4">Sales are activities related to selling or the number of goods or services sold in a given time period.</p>


                <div >
                    <Bar data= {{
                            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june',"july","aug",'sep','act','nov','dec'],
                            datasets: [{
                                    data: [80, 10,110,50,80,10,20,40,200,60,30,150],
                                    backgroundColor: "#6585e7" ,
                                    borderColor: "#6585e7",
                                    borderWidth: 1
                                 }]
                    }}
                        options = {{
                            scales: {
                            y: {
                                beginAtZero: true
                                }
                            }
                        }}
                        height={""} width={""} 
                    />
            </div> 
        </div>
        </div>
    </div>
    );
};

export default MonthlySales;
