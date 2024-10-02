import React from "react";

const Button = ({ backgroundColor, width, height, text }) => {
  const styles = {
    backgroundColor,
    width,
    height,
    border: "none",
    color: "#fff",
    padding: "10px",
    cursor: "pointer",
  };

  return <button style={styles}>{text}</button>;
};

export default Button;
