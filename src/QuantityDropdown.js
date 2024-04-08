import React, { useState } from "react";

const QuantityDropdown = ({ onQuantitySelect }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    onQuantitySelect(newQuantity);
  };

  return (
    <select value={quantity} onChange={handleQuantityChange}>
      {[...Array(100).keys()].map((i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
  );
};

export default QuantityDropdown;
