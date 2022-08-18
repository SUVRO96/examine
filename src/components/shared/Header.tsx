import React, { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className="row bg-info">
      <div className="col-6">
        <h1>Examine</h1>
      </div>
      <div className="col-6 d-flex justify-content-end">
        <Link to="/login" className="btn btn-success my-2">
          <i className="fa-solid fa-user"></i>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
