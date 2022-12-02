import  { useContext } from 'react'
import { Context } from '../contexts/Context'

export default function ButtonMain() {
    const {handleMain} = useContext(Context)
  return (
    <div>
        <button className='hover:underline' onClick={handleMain}> 
            Обратно
        </button>
    </div>
  )
}
