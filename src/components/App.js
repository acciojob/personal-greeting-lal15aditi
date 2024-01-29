
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState('')
  return (
    <div>
        {/* Do not remove the main div */}
        <>
          {/* <p>Enter your name:</p> */}
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
          <p>Hello {text}!</p>
        </>
    </div>
  )
}

export default App
