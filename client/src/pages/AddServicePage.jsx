import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./addServicePage.css";
// import axios from "axios";

const AddServicePage = () => {
  const [values, setValues] = useState({
    service: "",
    date: "",
    cost: "",
    location: "",
    contact: "",
    link: "",
    remark: "",
    file: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/addService/preview", {
      state: values, // hantar semua data
    });
    // const formData = new FormData();
    // Object.entries(values).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });

    // try {
    //   const res = await axios.post(
    //     "http://localhost:5484/services/addService",
    //     formData,
    //     {
    //       withCredentials: true,
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     },
    //   );
    //   if (res.data.status) {
    //     alert(res.data.message);
    //     navigate("/services");
    //   } else {
    //     alert(res.data.messages);
    //   }
    // } catch (err) {
    //   console.log(err);
    //   alert("Error");
    // }
  };
  return (
    <form className="page addServicePage" onSubmit={handleSubmit}>
      <div className="left">
        <label htmlFor="service">Service</label>
        <input
          type="text"
          id="service"
          onChange={handleChange}
          name="service"
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          className="date"
          id="date"
          onChange={handleChange}
          name="date"
        />
        <label htmlFor="cost">Cost</label>
        <input type="text" id="cost" onChange={handleChange} name="cost" />
        <label htmlFor="location">Location</label>
        <textarea
          name="location"
          id="location"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="right">
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          onChange={handleChange}
          name="contact"
        />
        <label htmlFor="link">Link</label>
        <input type="text" id="link" onChange={handleChange} name="link" />
        <label htmlFor="remark">Remarks</label>
        <textarea name="remark" id="remark" onChange={handleChange}></textarea>
      </div>
      <div className="bottom">
        <div className="file">
          <label htmlFor="receipt" className="receipt-label">
            Receipt
          </label>
          <div className="file-input">
            <label htmlFor="receipt" className="select-file-btn">
              {values.file ? values.file.name : "Select File"}
            </label>
            <label htmlFor="receipt" className="upload-file-btn">
              Upload file
            </label>
            <input
              type="file"
              id="receipt"
              onChange={handleChange}
              name="file"
            />
          </div>
        </div>
        <div className="btn-back-submit">
          <Link to="/services" className="back-btn">
            Back
          </Link>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default AddServicePage;
