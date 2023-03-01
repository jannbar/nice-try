# `nice-try`

A small wrapper around try/catch, to make error handling in promises a bit more comfy.

## Installation

### pnpm
`pnpm add @wh1zk1d/nice-try`

### yarn
`yarn add @wh1zk1d/nice-try`

### npm
`npm install @wh1zk1d/nice-try`

## Usage
```ts
async function fetchData() {
  const [data, error] = await niceTry(fetch('http://jsonplaceholder.typicode.com/todos'))
  
  if (error) {
    // Handle error
  }
}
```
