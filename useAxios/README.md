# @hoooks/use-axios
Get external data and reload function with options.

## Installation

#### yarn
`yarn add @hoooks/use-axios`

#### npm
`npm i @hoooks/use-axios`

## Usage
```js
import React from "react";
import useAxios from "@hoooks/use-axios";

export default function App() {
  const { isLoading, data, error, reload } = useAxios({
      url: "https://something.you.need.to.get"
  });
  return (
      <>
        <h1>{isLoading ? "loading..." : "put your logic here"}</h1>
        <button onClick={reload}>reload</button>
      </>
  );
}
```

### Return
|Return|Type|Description|
|------|----|-----------|
|isLoading, data, error, reload function|Object|An object containing isLoading, data, error, reload function|