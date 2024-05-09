import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
  
  const [data, setData] = useState(0);

  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  useEffect( () => {
    fetch(url).then((result) => result.json()).then((result) => setData(result[currency]));

    console.log(data);
    // "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json"
  }, [currency]);


  return data;
}