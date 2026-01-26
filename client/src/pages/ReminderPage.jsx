import { Link } from "react-router-dom";
import "./ReminderPage.css";

const ReminderPage = () => {
  return (
    <div className="page ReminderPage">
      <div className="top">
        <Link className="add" to="/addReminder">
          <span className="material-symbols-outlined plus-icon">add</span>
          Add new
        </Link>
      </div>
      <div className="content">
        <div className="reminder-container">
          <div className="reminder">Check dan tukar minyak hitam & gearbox</div>
          <span className="material-symbols-outlined">delete</span>
        </div>
        <div className="reminder-container">
          <div className="reminder">Check dan tukar minyak hitam & gearbox</div>
          <span className="material-symbols-outlined">delete</span>
        </div>
        <div className="reminder-container">
          <div className="reminder">Check dan tukar minyak hitam & gearbox</div>
          <span className="material-symbols-outlined">delete</span>
        </div>
      </div>
    </div>
  );
};

export default ReminderPage;
