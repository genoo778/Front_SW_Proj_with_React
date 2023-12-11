import './alldoc.css';
import { useState } from 'react';

function All() {
  const tabContents = [
    {
      id: 'pills-all',
      title: 'All',
      documents: [
        { documentPath: 'documents/h.pdf', category: 'Policy', icons: ['fa-link-slash', 'fa-magnifying-glass-plus'] },
        { documentPath: 'documents/7oss-pdf.pdf', category: 'Guidelines', icons: ['fa-link-slash', 'fa-magnifying-glass-plus'] },
        { documentPath: 'documents/Ahmed Gomaa-pdf.pdf', category: 'Reports', icons: ['fa-link-slash', 'fa-magnifying-glass-plus'] },
        // Add more documents as needed
      ],
    },
    // Add more tabs as needed
  ];

  return (
    <div className="all">
      <>
        {/* Portfolio */}
        <section id="portofolio" className="py-5">
          <div className="container p-3">
            <div className="row">
              <div className="col-sm-12 mb-5">
                <div className="title-box py-4 text-center">
                  <h3 className="portfolio-head">Documents</h3>
                  <h4 className="pt-5">
                    All documents created with SDLC Tab
                  </h4>
                </div>
              </div>
            </div>
            <a style={{

              marginLeft: "520px", fontWeight: "bold", fontSize: "15px", color: "black", padding: "10px;",
              transition: "all ease-in-out 0.1s;",
              content: "",
              position: "absolute;",
              height: "2px;",
              width: "0%;",
              bottom: "5px;",
              left: "10%;",
              backgroundcolor: "black;",
              width: "80%;"
            }}
              href="/alll"

              className="nav-link active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
            All Images
            </a>

            <a style={{ marginLeft: "620px", marginTop: "-22px", fontWeight: "bold", fontSize: "15px", color: "black", padding: "10px;" }}
              href=""
              className="nav-link active fa-bold"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"

            >
              
              All Documents
            </a>
          </div>

          <div className="tab-content" id="pills-tabContent">
            {tabContents.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane fade ${tab.id === 'pills-all' ? 'show active' : ''}`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
                tabIndex={0}
              >
                <div className="container">
                  <div className="row">
                    {tab.documents.map((document, index) => (
                      <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-4 p-3">
                        <div className="portfolio-document" >
                          <iframe title={`Document ${index + 1}`} src={document.documentPath} className="w-100" />
                          <div className="portfolio-layer">
                            <div className="layer-context2">
                              <h6 className="text-black">{document.category}</h6>

                            </div>
                            <button className="btn btn-primary" >
                              Download
                            </button>

                            <button style={{ marginLeft: "20px" }} className="btn btn-danger" >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>


              </div>
            ))}
          </div>
        </section>
        <script src="js/bootstrap.bundle.min.js"></script>
      </>
    </div>
  );
}

export default All;
