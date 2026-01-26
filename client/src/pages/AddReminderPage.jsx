import { Link } from "react-router-dom";
import "./AddReminderPage.css";

const AddReminderPage = () => {
  return (
    <form className="page addReminderPage">
      <div className="left">
        <h1>New Form</h1>
        <label htmlFor="service">Service</label>
        <input type="text" id="service" />
        <label htmlFor="cost">Cost</label>
        <input type="text" id="cost" />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
        <label htmlFor="Image">Image</label>
        <div className="file-input">
          <label htmlFor="receipt" className="select-file-btn">
            {/* {values.file ? values.file.name : "Select File"} */}
          </label>
          <label htmlFor="receipt" className="upload-file-btn">
            Upload file
          </label>
          <input type="file" id="receipt" name="file" />
        </div>
      </div>
      <div className="right"></div>
      <div className="bottom"></div>
    </form>
  );
};

export default AddReminderPage;
