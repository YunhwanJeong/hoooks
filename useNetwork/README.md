# @hoooks/use-network
Check whether the network status is online or offline.

## Installation

#### yarn
`yarn add @hoooks/use-network`

#### npm
`npm i @hoooks/use-network`

## Usage
```js
import React from "react";
import useTitle from "@hoooks/use-network";

function App() {
  const isOnline = useNetwork();
  return (
      <>
        <h1>{isOnline ? "Online" : "Offline"}</h1>
      </>
  );
}
```

### Return
|Return|Type|Description|
|------|----|-----------|
|Boolean|Boolean|A boolean indicating the network status|