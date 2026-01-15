import "./addServicePage.css";
import { Link } from "react-router-dom";

const AddServicePage = () => {
  return (
    <form className="page addServicePage">
      <div className="left">
        <label htmlFor="service">Service</label>
        <input type="text" id="service" />
        <label htmlFor="date">Date</label>
        <input type="date" className="date" id="date" />
        <label htmlFor="cost">Cost</label>
        <input type="text" id="cost" />
        <label htmlFor="location">Location</label>
        <textarea name="location" id="location"></textarea>
      </div>
      <div className="right">
        <label htmlFor="contact">Contact</label>
        <input type="text" id="contact" />
        <label htmlFor="link">Link</label>
        <input type="text" id="link" />
        <label htmlFor="remark">Remarks</label>
        <textarea name="remark" id="remark"></textarea>
      </div>
      <div className="bottom">
        <div className="file">
          <label htmlFor="receipt" className="receipt-label">
            Receipt
          </label>
          <div className="file-input">
            <label htmlFor="receipt" className="select-file-btn">
              Select file
            </label>
            <label htmlFor="receipt" className="upload-file-btn">
              Upload file
            </label>
            <input type="file" id="receipt" />
          </div>
        </div>
        <div className="submit-btn-container">
          <button className="submit-btn">Submit</button>
        </div>
        <div className="btn-nav">
          <div className="back-btn-container">
            <Link to="/services" className="back-btn">
              Back
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddServicePage;
