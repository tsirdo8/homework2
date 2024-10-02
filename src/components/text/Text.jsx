import React from "react";

const Text = ({ fontSize, color, textAlign, children }) => {
  const styles = {
    fontSize,
    color,
    textAlign,
  };

  return <h1 style={styles}>{children}</h1>;
};

export default Text;
