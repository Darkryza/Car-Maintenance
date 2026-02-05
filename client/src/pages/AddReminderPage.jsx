import { useState } from "react";
import { Link } from "react-router-dom";
import "./AddReminderPage.css";

const AddReminderPage = () => {
  const [values, setValues] = useState({
    service: "",
    cost: "",
    location: "",
    file: "",
  });
  return (
    <form className="page addReminderPage">
      <div className="top">
        <h1>New Form</h1>
      </div>
      <div className="left">
        <label htmlFor="service">Service</label>
        <input type="text" id="service" />
        <label htmlFor="cost">Cost</label>
        <input type="text" id="cost" />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
        <label htmlFor="receipt">Image</label>
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
      <div className="right">
        <label htmlFor="remark">Remark</label>
        <textarea name="remark" id="remark"></textarea>
        <label htmlFor="status">Status</label>
        <select name="status" id="status">
          <option value=""></option>
          <option value="done">Done</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="bottom">
        <Link to="/reminder">{"< Back"}</Link>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddReminderPage;
