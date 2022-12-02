import React, { useContext } from "react";
import { Context } from "../Context";

export default function ButtonAdmin() {
const {handleAdmin, main} = useContext(Context)

if(main) {
  return (
    <div>
      <button className='hover:underline' onClick={handleAdmin}>
        В админку
      </button>
    </div>
  )
}
}
