import { useState, useEffect } from 'react';

export default function Output(props) {
  const [ nameInitial, setNameInitial ] = useState(props.name);
  const [ name, setName ] = useState(props.name);

  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  return (
    <div className="Output">
      <h3>Without <code>useEffect</code></h3>
      <p>The initial value is set, but never updates despite <code>props.name</code> updating on changes.</p>
      <pre>
      {`useState(props.name);`}
      </pre>
      <p className="val">{nameInitial}</p>

      <h3>With <code>useEffect</code></h3>
      <p>Now the name value updates because the <code>useEffect</code> function runs on state changes. By calling the setter function, the component re-renders with the updated value.</p>
      <pre>
      {
`useState(props.name);

useEffect(() => {
  setName(props.name);
}, [props.name]);`}
      </pre>
      <p className="val">{name}</p>
    </div>
  );
}
