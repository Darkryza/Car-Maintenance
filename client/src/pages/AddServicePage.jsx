import "./addServicePage.css";

const AddServicePage = () => {
  return (
    <div className="page addServicePage">
      <div className="left">
        <label htmlFor="service">Service</label>
        <input type="text" id="service" />
        <label htmlFor="date">Date</label>
        <input type="date" className="date" id="date" />
        <label htmlFor="cost">Cost</label>
        <input type="text" id="cost" />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
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
      </div>
    </div>
  );
};

export default AddServicePage;
