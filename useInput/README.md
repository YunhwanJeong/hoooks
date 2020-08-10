## Usage
```js
import React from 'react';
import useInput from "@nooks/use-input"

export default function App() {
  const validator = (value) => !value.includes("@");
  const name = useInput("Mr. ", validator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name.props} />
    </div>
  );
}

```