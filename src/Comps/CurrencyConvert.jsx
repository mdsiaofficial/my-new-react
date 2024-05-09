import InputBox from "./CurrencyComp/InputBox"
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import { useState } from "react";
export default function CurrencyConvert() {

	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("btd");
	const [to, setTo] = useState("usd");
	const [convertedAmount, setConvertedAmount] = useState(0);
	
	return(
		<>
		
			<h1 className="text-3xl bg-red-700">Currency Convert App
			</h1>
		 	<InputBox></InputBox>
			
		
		</>
	)
}