# @hoooks/use-prevent-leave
Ask user one more time before leaving a page for safe-termination. Useful when changes are not saved.

## Installation

#### yarn
`yarn add @hoooks/use-prevent-leave`

#### npm
`npm i @hoooks/use-prevent-leave`

## Usage
```js
import React from "react";
import useTitle from "@hoooks/use-prevent-leave";

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
      <>
        <button onClick={enablePrevent}>enablePrevent</button>
        <button onClick={disablePrevent}>disablePrevent</button>
      </>
  );
}
```

### Return
|Return|Type|Description|
|------|----|-----------|
|Functions|Object|An object containing enablePrevent and disablePrevent|