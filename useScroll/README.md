# @hoooks/use-scroll
Get current X, Y coordinates of scroll

## Installation

#### yarn
`yarn add @hoooks/use-scroll`

#### npm
`npm i @hoooks/use-scroll`

## Usage
```js
import React from "react";
import useScroll from "@hoooks/use-scroll";

export default function App() {
  const { x, y } = useScroll();
  return (
    <div style={{ width: "300vw", height: "300vh" }}>
      <div style={{ position: "fixed" }}>
        <h1>X: {x}</h1>
        <h1>Y: {y}</h1>
      </div>
    </div>
  );
}
```