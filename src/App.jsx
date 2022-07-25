import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Buttom'
import quotes from "./quotes.json"
import QuoteBox from './components/QuoteBox'

const colors = ["#EF4444", "#84CC16", "#0EA5E9", "#FF822C", "#AC58F5", "#3C091D", "#220C15", "#235789", "#42BFDD"]

function App() {
  const random = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(random)
  const changeQuotes = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setIndex(random)
  }
  const randomColorIndex = Math.floor(Math.random() * colors.length)
  const color = colors[randomColorIndex]

  document.body.style = `background: ${color}`;
  return (
    <div>
      <div className="App">
        <QuoteBox index={quotes[index].quote} color={color}/>
        <Button color={color} index={quotes[index].author} changeQuotes={changeQuotes} />
      </div>
    </div>
  )
}

export default App 


