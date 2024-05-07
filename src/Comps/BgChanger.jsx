import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("red");

  
  return (
    <>
      <div style={{backgroundColor: color}} className="w-64 h-64 duration-200">
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap-justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">My test</div>
        </div>
      </div>
    </>
  )
}

export default BgChanger