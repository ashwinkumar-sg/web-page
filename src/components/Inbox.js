import React from 'react';
//https://picsum.photos/200/300?random=1

const Inbox = () => {
    return (
<div class="col-lg-5 col-xl-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                  <h6 class="card-title mb-0">Inbox</h6>
                  <div class="dropdown mb-2">
                    <button class="btn p-0" type="button" id="dropdownMenuButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                    </button>
                    
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <a href="#" class="d-flex align-items-center border-bottom pb-3">
                    <div class="mr-3">
                      <img src="../assets/images/faces/face2.jpg" class="rounded-circle wd-35" alt="user"/>
                    </div>
                    <div class="w-100">
                      <div class="d-flex justify-content-between">
                        <h6 class="text-body mb-2">Leonardo Payne</h6>
                        <p class="text-muted tx-12">12.30 PM</p>
                      </div>
                      <p class="text-muted tx-13">Hey! there I'm available...</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Inbox;
