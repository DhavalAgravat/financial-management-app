import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let loggedIn = localStorage.getItem("loggedIn");
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
