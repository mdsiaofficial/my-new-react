import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("white");

  
  return (
    <>
      <div style={{backgroundColor: color}} className="m-4 w-128 h-64 duration-200">
        <div className=" flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap-justify-center m-2 gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">

            <button onClick={() => setColor("red")} className="w-36 outline-none px-1 py-1 rounded-md" style={{ backgroundColor: "red" }}>Red</button>
            
            <button onClick={() => setColor("blue")} className="w-36 outline-none px-1 py-1 rounded-md" style={{ backgroundColor: "blue" }}>blue</button>
            
            <button onClick={()=> setColor("green")} className="w-36 outline-none px-1 py-1 rounded-md bg-green-700">green</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default BgChanger