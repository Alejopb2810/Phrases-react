import { useState } from 'react'
import './App.css'
import QuotesBox from './assets/components/QuotesBox'
import quotes from './assets/json/quotes.json'
import colors from './assets/json/colors.json'


function App() {

  const getRandomArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }

  const [quoteRandom, setQuoteRandom] = useState(getRandomArray(quotes))
  const [colorRandom, setColorRandom] = useState(getRandomArray(colors))


  const handleClick = () => {
    setQuoteRandom(getRandomArray(quotes))
    setColorRandom(getRandomArray(colors))
  }

  const objStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={objStyle}>
      <QuotesBox quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom} />
    </div>
  )
}

export default App
