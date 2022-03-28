// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const inputRef = React.useRef()
  const [errorState, setError] = React.useState()
  const [inputState, setInputState] = React.useState()

  function handleChange(event) {
    const inputValue = event.target.value
    const hasError = inputValue !== inputValue.toLowerCase()
    setError(hasError ? 'Username must be lower case' : null)
  }

  function normalise(event) {
    const inputValue = event.target.value
    setInputState(inputValue.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()

    // const username = event.target.elements.usernameInput.value
    const username = inputRef.current.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          ref={inputRef}
          // onChange={handleChange}
          onChange={normalise}
          value={inputState}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {errorState}
      </div>
      <button disabled={Boolean(errorState)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
