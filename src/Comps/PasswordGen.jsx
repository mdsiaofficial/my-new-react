import { useState, useCallback, useEffect, useRef } from "react"

export default function PasswordGen(){
  const [len, setLen] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  // useRef Hook
  const passRef = useRef(null);

  // const [specialAllow, setSpecialAllow] = useState(false);
  // const [lowerAllow, setLowerAllow] = useState(false);
  // const [upperAllow, setUpperAllow] = useState(false);
  // const [symbolAllow, setSymbolAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passGen = useCallback(()=>{
    let pass = "";
    let passStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow) passStr += "0123456789";
    if(charAllow) passStr += "!@#$%^&*()_+";

    for(let i=0; i<len; i++){
      let char = Math.floor(Math.random()*passStr.length + 1);
      pass +=passStr.charAt(char);
    }setPassword(pass);

  }, [len, numAllow, charAllow, setPassword]);
  

  const copyPassToClip = useCallback( () => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,12);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(()=>{
    passGen();
  }, [len, numAllow, charAllow, passGen]);

  
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Password Generator</h1>
      <div className="bg-olive-500 w-full max-w-md md-auto shadow-md rounded-lg px-4 my-8 text-orange-500">
        
        <div className="flex shadow-2xl rounded-lg overflow-hidden mb-4">
          <input type="text" 
          value={password} 
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}/>
          <button onClick={copyPassToClip} className="bg-orange-500 text-white px-3 py-1">Copy</button>
        </div>  

        <div className="flex text-sm-gap-x">
          <input type="range" min={8} max={16}
          className="cursor-pointer"
          value={len}
          onChange={(e) => {setLen(e.target.value)}}
          />
          <label htmlFor="">Length: {len}</label>
        </div>

        <div className="flex text-sm-gap-x">
          <input type="checkbox"
          defaultChecked={numAllow}
          id="numInput"
          onChange={()=>{
            setNumAllow(!numAllow);
            
          }}
          /> 
          <label htmlFor="">  Number</label>
        </div>

        <div className="flex text-sm-gap-x">
          <input type="checkbox"
          defaultChecked={charAllow}
          id="charInput"
          onChange={()=>{
            setCharAllow(!charAllow);
            
          }}
          />
          <label htmlFor="">  Character</label>
        </div>

        <div className="flex shadow-2xl rounded-lg overflow-hidden mb-4">
          <input type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          />
        </div>  

      </div>
    </div>
  )
}