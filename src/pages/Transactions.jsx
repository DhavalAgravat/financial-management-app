import React from "react";
import Sidebar from "../components/Sidebar";
import "./Transactions.css";
import Topbar from "../components/Topbar";

const Transactions = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        <div className="d-flex justify-content-between">
          <h3>Transactions</h3>
          <Topbar />
        </div>
        <button className="add-trans-btn mt-3">
          <i className="fa-sharp fa-solid fa-money-check-dollar me-2"></i>Add
          Transaction
        </button>
        <div className="row">
          <div className="col-12">
            <table className="trans-table mt-4">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>View</th>
              </tr>

              {/* <tr>
                <td>kfiufuifuh</td>
                <td>kfiufuifuh</td>
                <td>kfiufuifuh</td>
                <td>kfiufuifuh</td>
                <td>kfiufuifuh</td>
              </tr> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;