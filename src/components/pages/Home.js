// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
const Home = () => {
  const [showCards, setShowCards] = useState(false);

  const handleButtonClick = () => {
    setShowCards(!showCards);
  };

  return (
    <div style={{ background: "#f5f5f5" }}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12 mb-5">
            <div className="title-box py-5 text-center">
              <button type="button" className="btn border border-3 border-black" onClick={handleButtonClick}>
                Create Doc..
              </button>


            </div>
          </div>
        </div>

        {showCards && (
          <div className="row mt-4">
            <div className="col-md-4 col-sm-12 mb-5">
              <div className="service-box p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                </svg>
                <div className="service-content">
                  <h2 className="service-box-title fw-bold" style={{ marginTop: "10px" }}>Initiation Phase</h2>
                  <p className="service-box-description text-center">
                    Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever
                  </p>
                  <div class="container mt-4">
                <a href="/int" class="btn btn-white" role="button">Start</a>
  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-5">
              <div className="service-box p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-2-circle" viewBox="0 0 16 16">
                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
                </svg>

                <div className="service-content">
                  <h2 className="service-box-title fw-bold" style={{ marginTop: "10px" }} >Requirements Phase (Analysis Phase)</h2>
                  <p className="service-box-description text-center">
                    Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever
                  </p>


                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-5">
              <div className="service-box p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-3-circle" viewBox="0 0 16 16">
                  <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                </svg>
                <div className="service-content">
                  <h2 className="service-box-title fw-bold" style={{ marginTop: "10px" }} >Design Phase</h2>
                  <p className="service-box-description text-center">
                    Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever
                  </p>
                  <div class="container mt-4">

                  </div>
                  
                </div>
                
              </div>
            </div>
        
          </div>

        )}
      </div>
    </div>
  );
};

export default Home;
