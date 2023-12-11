import './req.css'
function Req() {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]

        console.log('Browser image:', selectedFile);
    };
    return (
        <section id="Requirements_Phase" className="p-5" >
            <div className="container px-5 ">
                <div className="row">
                    <div className="col-sm-12 mb-5">
                        <div className="title-box text-center">
                            <h3 className="contact-head fw-bold pt-5">
                                Software Requirements Specification (SRS)
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
                        <div className="contact_input">
                            <input
                                type="text "
                                placeholder="introduction"
                                name="introduction"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
                        <div className="contact_input">
                            <input
                                type="text "
                                placeholder=" Purpose of software being developed "
                                name="Purpose of software being developed"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
                        <div className="contact_input">
                            <input
                                type="text "
                                placeholder=" Intended Audience "
                                name="Intended Audience"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
                        <div className="contact_input">
                            <input
                                type="text "
                                placeholder=" Overall description of the software "
                                name="Overall description of the software"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-12 col-lg-12 mb-5">
                        <div className="contact_input">
                            <textarea
                                name="Message"
                                id=""
                                rows={5}
                                placeholder="System Features and Requirements"
                                className="form-control "
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <h6 style={{ marginTop: "-45px", marginLeft: "40px", color: "#748182" }}>ex:(functional,non-functional,External Interface) Requirements</h6>
                    <h6 style={{ marginTop: "50px", marginLeft: "13px", color: "#748182" }}>UseCase (JPEG/JPG)</h6>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                        <div className="contact_input">
                            
                            <input
                            style={{marginTop:"-2px"}}
                                type="file"
                                placeholder="Browse Image"
                                name="UseCase"
                                className="form-control"
                                onChange={handleFileChange}
                            />
                            
                        </div>
                    </div>
                    
                </div>

                <a href="/des" class="btn border border-1 border-black mb-3 px-5 a" role="button">Save</a>

                <button
                    type="button"
                    className="btn border border-1 border-black mb-3 px-5 another"
                >
                    Reset
                </button>
            </div>
        </section>


    );
}

export default Req;
