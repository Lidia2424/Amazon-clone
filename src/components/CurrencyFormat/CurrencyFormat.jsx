import React from "react";

function CurrencyFormat({ amount, currency = "USD" }) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);

  return <span>{formattedAmount}</span>;
}

export default CurrencyFormat;
