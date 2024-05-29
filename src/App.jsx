import React, { useEffect, useState } from 'react'
import "./App.css";
import axios from 'axios';

export const App = () => {
   const [amount,setAmount]=useState(1);
   const[fromCurrency,setFromCurrency]=useState("USD");
   const[toCurrency,setToCurrency]=useState("INR");
   const[convertedAmount,setConvertedAmount]=useState(null);
   const[exchangeRate,setExchangeRate]=useState(null);

   useEffect(()=>{
    const getExchangRate = async()=>{

      try{
         let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
         const response =await axios.get(url);
         // console.log(response);
         setExchangeRate(response.data.rates[toCurrency]);

      }catch(error){
         console.error("Error fetching exchange rate:",error);

      }
     };
     getExchangRate();
    
   },[fromCurrency,toCurrency]);
   useEffect(()=>{
      if(exchangeRate !== null){
         setConvertedAmount((amount*exchangeRate).toFixed(2));
      }
   },[amount,exchangeRate]);
   const handleAmountChange=(e)=>{
      const value=parseFloat(e.target.value);
      setAmount(isNaN(value)?0:value);

   };
   const handleFromCurrencyChange=(e)=>{
      setFromCurrency(e.target.value);
   };
   const handleToCurrencyChange=(e)=>{
      setToCurrency(e.target.value);
   };

  return (
    <div className='currency-converter'>
      <div className="box">
         </div>
         <div className="data">
            <h1>Currency Converter</h1>
            <div className="input-container">
               <label htmlFor="amt">Amount:</label>
               <input type="number" value={amount} id='amt' onChange={handleAmountChange}/>
            </div>
            <div className="input-container">
               <label htmlFor="fromCurrency">From Currency:</label>
               <select  id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
               <option value="USD">United States</option>
            <option value="CAD">Canada</option>
            <option value="GBP">British Pound Sterlingy</option>
            <option value="AUD">Australia</option>
            <option value="JPY">Japan</option>
            <option value="BRL">Brazil</option>
            <option value="INR">India</option>
            <option value="ZAR">South Africa</option>
            <option value="MX">Mexico</option>
            <option value="CNY">Chines Yuan</option>
               </select>
            </div>
            <div className="input-container">
               <label htmlFor="toCurrency">To Currency:</label>
               <select  id="toCurrency" value={toCurrency} onChange={handleToCurrencyChange}>
               <option value="USD">United States</option>
            <option value="CAD">Canada</option>
            <option value="GBP">British Pound Sterlingy</option>
            <option value="AUD">Australia</option>
            <option value="JPY">Japan</option>
            <option value="BRL">Brazil</option>
            <option value="INR">India</option>
            <option value="ZAR">South Africa</option>
            <option value="MX">Mexico</option>
            <option value="CNY">Chines Yuan</option>
               </select>
            </div>
            <div className="result">
               <p>{amount} {fromCurrency}is equal to {convertedAmount} {toCurrency}</p>
            </div>
         </div>
      </div>
    
  )
}
