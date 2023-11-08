import { useEffect, useState, useCallback } from "react"

function App() {

  const [userInput, setUserInput] = useState("")
  const [result, setResult] = useState(0)

  const [num1] = useState(4)
  const [num5] = useState(5)

  const sum = useCallback(() => num1 + num5)

  // const buildArray = () => {

  // }

  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`);
    setResult(sum())
  }, [sum])

  return (
    <main className="App">
      <div className="input">
        <input type="text"
          placeholder="input"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          required
        />
      </div>
      <h1>OutPut: <code> {userInput || ".."}</code></h1>
    </main>
  )
}

export default App
