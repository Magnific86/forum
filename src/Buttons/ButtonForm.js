import  { useContext } from 'react'
import { Context } from '../contexts/Context'

export default function ButtonForm() {
const {handleForm, main} = useContext(Context)

 if(main) {
  return (
    <div>
        <button className='hover:underline' onClick={handleForm}>
           Добавить новый пост
        </button>
    </div>
  )
 }
}
