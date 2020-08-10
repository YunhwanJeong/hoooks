# @hoooks/use-title
React Hook to update your document's title

## Installation

#### yarn
`yarn add @hoooks/use-title`

#### npm
`npm i @hoooks/use-title`

## Usage
```js
import React from "react";
import useTitle from "@hoooks/use-title";

export default function App() {
  useTitle("Hi!");
  return <h1>Check out your browser's title</h1>;
}
```