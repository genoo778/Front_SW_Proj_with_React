import './design.css'
import { useState } from 'react';
function Design() {
  const [fileInputs, setFileInputs] = useState([0]);
  const handleFileChange = (event, index) => {
    const selectedFile = event.target.files[0]

    console.log('Browser image:', selectedFile);
    console.log(`Selected File ${index + 1}:`, selectedFile);
  };




  const handleAddFileInput = () => {
    setFileInputs((prevInputs) => [...prevInputs, prevInputs.length]);
  };
  return (

    <section id="Design_Phase" className="p-5" >
      <div className="container px-5 ">
        <div className="row">
          <div className="col-sm-12 mb-5">
            <div className="title-box text-center">
              <h3 className="contact-head fw-bold pt-5">
                system Design Document (SDD)
              </h3>
              <h4 className="pt-3">
                Insert documents as Images (UML Diagrams, Database Design, User
                Interface Design)
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className="contact_input">

            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-5" style={{ marginRight: "60px" }}>
            <div className="contact_upload">
              <form action="/upload" method="post" encType="multipart/form-data">
                {fileInputs.map((index) => (
                  <div key={index} >
                    <label style={{backgroundColor:"white",marginTop:"20px"}} htmlFor={`photo-${index}`}>Select a photo {index + 1}:</label>
                    <input
                      type="file"
                      id={`photo-${index}`}
                      name={`UseCase-${index}`}
                      className="form-control"
                      onChange={(event) => handleFileChange(event, index)}
                    />
                  </div>
                ))}
                <button type="button" class="btn border border-1 border-black mb-3 px-5 a" style={{marginTop:"10px"}} onClick={handleAddFileInput}>
                  Add image
                </button>
              </form>
            </div>
          </div>
       
        </div>
        <a href="/pree" class="btn border border-1 border-black mb-3 px-5 a" role="button">Save</a>
      </div>
    </section>

  );
}

export default Design;