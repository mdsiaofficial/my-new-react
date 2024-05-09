
import React from "react";

export default function InputBox({
  label,
  amount, onAmountChange, onCurrencyChange,
  currencyOptions = ["bdt", "usd", "euro", "gbp"],
  selectCurrency = "bdt",
  amountDisable = false,
  currencyDisable = false,
  className = "", }) {


  return (
    <div className={` p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor="" className="mb-2 inline-block">{label}</label>

        <input className="outline-none w-full bg-transparent border rounded-lg text-center text-xl py-1.5"
        type="number" 
        placeholder="Amount" 
        disabled={amountDisable} 
        value={amount}
        onChange={ (e) => onAmountChange &&  onAmountChange(Number(e.target.value))}></input>
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/2 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-900 coursor-pointer outline-none"value={selectCurrency}
        onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        name="" id="">
          {currencyOptions.map( (c) => (
            <option key={c} value={c}>{c}</option>

          ))}
        </select>
      </div>
    </div>
  );
}