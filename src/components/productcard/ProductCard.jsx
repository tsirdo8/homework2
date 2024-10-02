import React from "react";

const ProductCard = ({ price, quantity, name, description, color }) => {
  const styles = {
    backgroundColor: color,
    padding: "10px",
    borderRadius: "5px",
    width: "250px",
    margin: "10px",
  };

  return (
    <div style={styles}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>ფასი: {price} ₾</p>
      <p>რაოდენობა: {quantity}</p>
    </div>
  );
};

export default ProductCard;
