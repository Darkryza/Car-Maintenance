import { Link, useNavigate } from "react-router-dom";
import "./ReminderPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ReminderPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5484/reminders/getData", {
          withCredentials: true,
        });
        if (res.data.status) {
          setData(res.data.reminders);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure want to delete?");
    if (!confirmDelete) return;
    try {
      const res = await axios.delete(
        `http://localhost:5484/reminders/delete/${id}`,
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
      alert("Delete Failed");
    }
  };
  const handleView = (item) => {
    navigate("/reminder/view", {
      state: item,
    });
  };
  return (
    <div className="page ReminderPage">
      <div className="top">
        <Link className="add" to="/addReminder">
          <span className="material-symbols-outlined plus-icon">add</span>
          Add new
        </Link>
      </div>
      <div className="content">
        {data.map((item) => {
          return (
            <div className="reminder-container" key={item.id}>
              <div onClick={() => handleView(item)} className="reminder">
                {item.service}
              </div>
              <span
                className="material-symbols-outlined"
                onClick={() => handleDelete(item.id)}
              >
                delete
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReminderPage;
