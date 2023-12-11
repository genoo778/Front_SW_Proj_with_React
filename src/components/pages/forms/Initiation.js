import './initions.css'
function Initiation() {
  return (
    <section id="Initiation_Phase" className="p-5" >
      <div className="container px-5 ">
        <div className="row">
          <div className="col-sm-12 mb-5">
            <div className="title-box text-center">
              <h3 className="contact-head fw-bold pt-5">Initiation Phase</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className="contact_input">
              <input
                type="text "
                placeholder=" Project Title "
                name="Project Title"
                className="form-control"
              />
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className="contact_input">
              <input
                type="text "
                placeholder=" Project Start Date "
                name="Project Start Date"
                className="form-control"
              />
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className="contact_input">
              <input
                type="text "
                placeholder=" Project Finish Date "
                name="Project Finish Date"
                className="form-control"
              />
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className="contact_input">
              <input
                type="text "
                placeholder=" Project Objectives "
                name="Project Objectives"
                className="form-control"
              />
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className="contact_input">
              <input
                type="text "
                placeholder=" Project Manager "
                name="Project Manager"
                className="form-control"
              />
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className="contact_input">
              <input
                type="text "
                placeholder=" Budget Information "
                name="Budget Information"
                className="form-control"
              />
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className="contact_input">
              <input
                type="text "
                placeholder=" Project Scope Statements"
                name="Project Scope Statements"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <a href="/reqq" class="btn border border-1 border-black mb-3 px-5 a" role="button">Save</a>

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

export default Initiation;