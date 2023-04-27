import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn } from "../store/userSlice";

const Protected = (props) => {
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  });
  return (
    <div>
      <Component></Component>
    </div>
  );
};

export default Protected;
