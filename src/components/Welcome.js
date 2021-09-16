import React from 'react';

const Welcome = () => {
    return (
        <div>
            <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin mb-4">
          <div>
            <h4 class="mb-3 mb-md-0">Welcome to Dashboard</h4>
          </div>
          <div class="d-flex align-items-center flex-wrap text-nowrap ">
            <button type="button" class="btn btn-outline-info d-md-block mx-3">
                  <i class="fas fa-arrow-to-bottom"></i>Import
            </button>
            <button type="button" class="btn btn-outline-primary mb-md-0">
              Print
            </button>
            <button type="button" class="btn btn-primary  mx-3 my-3">
              Download Report
            </button>
          </div>
        </div>
        </div>
    );
};

export default Welcome;