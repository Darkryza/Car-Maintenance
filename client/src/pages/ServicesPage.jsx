import { Link } from "react-router-dom";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="page service-page">
      <div className="top">
        <Link className="add-service" to="/addService">
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
            <tr>
              <td>Tayar</td>
              <td>1/2/2026</td>
              <td>RM200</td>
              <td>
                <div className="action-btn">
                  <span class="material-symbols-outlined">edit</span>
                  <span class="material-symbols-outlined">delete</span>
                  <span class="material-symbols-outlined">visibility</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Tayar</td>
              <td>1/2/2026</td>
              <td>RM200</td>
              <td>
                <div className="action-btn">
                  <span class="material-symbols-outlined">edit</span>
                  <span class="material-symbols-outlined">delete</span>
                  <span class="material-symbols-outlined">visibility</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Tayar</td>
              <td>1/2/2026</td>
              <td>RM200</td>
              <td>
                <div className="action-btn">
                  <span class="material-symbols-outlined">edit</span>
                  <span class="material-symbols-outlined">delete</span>
                  <span class="material-symbols-outlined">visibility</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesPage;
