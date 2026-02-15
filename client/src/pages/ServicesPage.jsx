import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ServicesPage.css";

const ServicesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5484/services/getData", {
          withCredentials: true,
        });
        if (res.data.status) {
          setData(res.data.services);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure want to delete");
    if (!confirmDelete) return;
    try {
      const res = await axios.delete(
        `http://localhost:5484/services/delete/${id}`,
        { withCredentials: true },
      );
      if (res.data.status) {
        alert(res.data.message);
        setData((prev) => prev.filter((item) => item.id !== id));
      } else {
        console.log(res.data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="page service-page">
      <div className="top">
        <Link className="add" to="/addService">
          <span className="material-symbols-outlined plus-icon">add</span>
          Add services
        </Link>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>
                <div className="th-data">Type</div>
              </th>
              <th>
                <div className="th-data">Date</div>
              </th>
              <th>
                <div className="th-data">Amount</div>
              </th>
              <th>
                <div className="th-data">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.service}</td>
                  <td>
                    {new Date(item.date).toLocaleDateString("ms-MY", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                  <td>RM{item.cost.toFixed(2)}</td>
                  <td>
                    <div className="action-btn">
                      <span className="material-symbols-outlined">edit</span>
                      <span
                        className="material-symbols-outlined"
                        onClick={() => handleDelete(item.id)}
                      >
                        delete
                      </span>
                      <Link to="/services/view">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesPage;
