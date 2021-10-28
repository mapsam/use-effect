import { useState } from 'react';
import Output from './Output.js';

function App() {
  const [ name, setName ] = useState('Welcome to Seattle');

  return (
    <div className="App">
      <h2>Why should I use <code>useEffect</code>?</h2>
      <p>Setting state with the <a href="https://reactjs.org/docs/hooks-state.html"><code>useState</code></a> hook is great. If the value was set with props initially and your props update, you need to use the <a href="https://reactjs.org/docs/hooks-effect.html"><code>useEffect</code></a> function to properly re-render the state.</p>
      <p>Try editing the text in the field below.</p>
      <input type="text" className="" value={name} onChange={(e) => setName(e.target.value)}></input>
      <Output name={name} />
    </div>
  );
}

export default App;
