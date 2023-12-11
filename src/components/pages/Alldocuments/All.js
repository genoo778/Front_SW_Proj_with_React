import './all.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function All() {

  const tabContents = [
    {
      id: 'pills-all',
      title: 'All',
      images: [
        { id: 1, imagePath: 'images/portfolio/Use Case Model.png', category: 'UseCase Diagram', icons: ['fa-link-slash', 'fa-magnifying-glass-plus'] },
        { id: 2, imagePath: 'images/portfolio/UML_use_case_example-800x707.png', category: 'UML Diagram', icons: ['fa-link-slash', 'fa-magnifying-glass-plus'] },
        { id: 1, imagePath: 'images/portfolio/dbdiagram.io---diagram-only.png', category: 'Database Design', icons: ['fa-link-slash', 'fa-magnifying-glass-plus'] },
        { imagePath: 'images/portfolio/b394406c3856fe00683d8d2c3e600985ab6e8aa9.webp', category: 'User Interface Design', icons: ['fa-link-slash', 'fa-magnifying-glass-plus'] },
        { imagePath: 'images/portfolio/5.jpg', category: 'Image Description', icons: ['fa-link-slash', 'fa-magnifying-glass-plus'] },
        { imagePath: 'images/portfolio/6.jpg', category: 'Image Description', icons: ['fa-link-slash', 'fa-magnifying-glass-plus'] },
      ],
    },


  ];

  const [images, setImages] = useState(tabContents)
  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="all">
      <>
        {/*portofolio*/}
        <section id="portofolio" className=" py-5">
          <div className="container p-3">
            <div className="row">
              <div className="col-sm-12 mb-5">
                <div className="title-box  py-4 text-center">
                  <h3 className="portofolio-head ">Diagrams</h3>
                  <h4 className="pt-5">
                    All Images (Diagrams &amp; UI) entered in SDLC Tab
                  </h4>
                </div>
              </div>
            </div>
            <div className="portofolio-body">
              <ul
                className="nav nav-pills mb-3 d-flex align-items-center justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    href=""
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
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="/alldoc"
                    className="nav-link"
                    id="pills-brand-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-brand"
                    role="tab"
                    aria-controls="pills-brand"
                    aria-selected="false"
                  >
                    All Documents
                  </a>
                </li>

              </ul>

            </div>
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
                    {tab.images.map((image, index) => (
                      <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-4 p-3">
                        <div className="portofolio-image">
                          <img src={image.imagePath} className="w-100" alt={`Image ${index + 1}`} />
                          <div className="portofolio-layer">
                            <div className="layer-context2">
                              <h6 className="text-black">{image.category}</h6>
                              <div className="photo-icons d-flex mt-1 justify-content-around">

                                <button className="btn btn-primary" style={{ marginRight: '20px' }}>
                                  <Link to={`/view/${image.id}`} className="text-white text-decoration-none">
                                    View
                                  </Link>
                                </button>

                                <button className="btn btn-danger" onClick={() => handleDelete(image.id)}>
                                  Delete
                                </button>

                              </div>
                            </div>
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


