import { useEffect, useState } from "react"

function App() {

  const [userInput, setUserInput] = useState("")

  const [num1] = useState(4)
  const [num5] = useState(5)

  const sum = () => num1 + num5

  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`);
  }, [sum])
  return (
    <main className="App">

    </main>
  )
}

export default App
