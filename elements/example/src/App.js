import React from 'react'

import { GlueStick } from 'elements'
import 'elements/dist/index.css'

const App = () => {
  return (
    <GlueStick
      user={"default"}
      schema={{
        fields: [
          {
            col: "Name",
            key: "name"
          },
          {
            col: "Phone Number",
            key: "phoneNumber",
            validator: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.source
          }
        ]
      }}
    />)
}

export default App
