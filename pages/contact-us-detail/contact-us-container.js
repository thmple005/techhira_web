import React from "react";

const ContactUsContainer = ({name,email,message,services,number}) => {
  return (
    <>
    <div className="form-container">
      <div className="row">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="contact-validation-active"
      >
          <div className="col col-lg-12 col-12">
            <div className="form-field">
              <label>Name</label>
              <input
                className="form-control"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                value={name}
                type="text"
                name="subject"
                placeholder="subject"
                disabled
              ></input>
            </div>
          </div>

          <div className="col col-lg-12 col-12">
          <label>Email</label>

            <div className="form-field">
              <input
                className="form-control"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                value={email}
                type="text"
                name="subject"
                placeholder="subject"
                disabled
              ></input>
            </div>
          </div>


          <div className="col col-lg-12 col-12">
          <label>Number</label>

            <div className="form-field">
              <input
                className="form-control"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                value={number}
                type="text"
                name="subject"
                placeholder="subject"
                disabled
              ></input>
            </div>
          </div>
          
          <div className="col col-lg-12 col-12">
          <label>Services</label>

            <div className="form-field">
              <input
                className="form-control"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                value={services}
                type="text"
                name="subject"
                placeholder="subject"
                disabled
              ></input>
            </div>
          </div>

          <div className="col col-lg-12 col-12">
          <label>Message</label>

            <div className="form-field">
              <textarea
                className="form-control"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                value={message}
                type="text"
                name="subject"
                placeholder="subject"
                disabled
              ></textarea>
            </div>
          </div>
      </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsContainer;
