import React, { useState, useEffect, useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false, // corrected typo
  className = "",
}) {
  const id = useId();
  const [localAmount, setLocalAmount] = useState(amount);

  useEffect(() => {
    setLocalAmount(amount);
  }, [amount]);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.trim() !== "") {
      setLocalAmount(Number(value));
    } else {
      setLocalAmount("");
    }
  };

  const handleBlur = () => {
    if (onAmountChange) {
      onAmountChange(localAmount);
    }
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={localAmount}
          onChange={handleAmountChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled} // corrected typo
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
