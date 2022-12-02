import React, { useContext } from 'react'
import { Context } from '../Context'

export default function ButtonInfo() {
    const {handleInfo} = useContext(Context)
  return (
    <div>
        <button className='hover:underline' onClick={handleInfo}>
            Больше информации
        </button>
    </div>
  )
}
