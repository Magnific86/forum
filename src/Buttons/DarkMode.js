import  { useContext } from 'react'
import { Context } from '../contexts/Context'

export default function DarkMode() {
const {theme, handleTheme} = useContext(Context)

  return (
    <div>
        <button onClick={handleTheme}>
            Тема: {theme}
        </button>
    </div>
  )
}
