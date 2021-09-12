import React from 'react';

const Projects = () => {
    return (
            <div class="col-lg-5 col-xl-8">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-baseline mb-2">
                  <h6 class="card-title mb-0">Projects</h6>
                    <button class="btn p-0" type="button" id="dropdownMenuButton7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
                <div class="table-responsive ">
                  <table class="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th class="pt-0">#</th>
                        <th class="pt-0">Project Name</th>
                        <th class="pt-0">Start Date</th>
                        <th class="pt-0">Due Date</th>
                        <th class="pt-0">Status</th>
                        <th class="pt-0">Assign</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>NobleUI jQuery</td>
                        <td>01/01/2021</td>
                        <td>26/04/2021</td>
                        <td><span class="badge bg-danger">Released</span></td>
                        <td>Leonardo Payne</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>NobleUI Angular</td>
                        <td>01/01/2021</td>
                        <td>26/04/2021</td>
                        <td><span class="badge bg-success">Review</span></td>
                        <td>Carl Henson</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>NobleUI ReactJs</td>
                        <td>01/05/2021</td>
                        <td>10/09/2021</td>
                        <td><span class="badge bg-info">Pending</span></td>
                        <td>Jensen Combs</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>NobleUI VueJs</td>
                        <td>01/01/2021</td>
                        <td>31/11/2021</td>
                        <td><span class="badge bg-warning">Work in Progress</span>
                        </td>
                        <td>Amiah Burton</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>NobleUI Laravel</td>
                        <td>01/01/2021</td>
                        <td>31/12/2021</td>
                        <td><span class="badge bg-danger text-white">Coming soon</span></td>
                        <td>Yaretzi Mayo</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>NobleUI NodeJs</td>
                        <td>01/01/2021</td>
                        <td>31/12/2021</td>
                        <td><span class="badge bg-primary">Coming soon</span></td>
                        <td>Carl Henson</td>
                      </tr>
                      <tr>
                        <td >3</td>
                        <td >NobleUI EmberJs</td>
                        <td >01/05/2021</td>
                        <td >10/11/2021</td>
                        <td ><span class="badge bg-info">Pending</span></td>
                        <td >Jensen Combs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> 
            </div>
          </div>
    );
};

export default Projects;