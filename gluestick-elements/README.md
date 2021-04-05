# gluestick elements

[![NPM](https://img.shields.io/npm/v/gluestick-elements.svg)](https://www.npmjs.com/package/gluestick-elements) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save gluestick-elements
```

## Usage

```jsx
import React, { Component } from 'react'

import {GlueStick} from 'gluestick-elements'
import 'gluestick-elements/dist/index.css'

class Example extends Component {
  render() {
    return (<GlueStick
      user={"default"}
      endpoint={"https://gluestick-api.herokuapp.com"}
      schema={{
        fields: [
          {
            col: "Name",
            key: "name"
          },
          {
            col: "Phone Number",
            key: "phoneNumber",
            validator: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
              .source
          }
        ]
      }}
    />);
  }
}
```
