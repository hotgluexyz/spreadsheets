import React from 'react'

import { GlueStick } from 'elements'
import 'elements/dist/index.css'

const App = () => {
  const initialData = [
    [ 'First Name', 'Last Name', 'Email', 'Subscribed', 'Subscription Start', 'Opens' ],
    [ 'Anna-Liisa', 'Piirmann', 'annaliisa.piirmann@example.com', 'YES', '2020-04-01', '1251' ],
    [ 'Piibe', 'Nõmm', 'piibe.nomm@example.com', 'NO', '2020-03-23', '444' ],
    [ 'Teet', 'Ottin', 'teet.ottin@example.com', 'YES', '2020-01-03', '24' ],
    [ 'Gert', 'Jürjo', 'gert.jurjo@example.com', 'YES', '2020-03-23', '1284' ],
    [ 'Marta Maria', 'Kasepuu', 'martamaria.kasepuu@example.com', 'NO', '2020-02-02', '1284' ]
  ]
  const [state, setState] = React.useState('upload');
  const [data, setData] = React.useState(initialData);
  const [filename, setFileName] = React.useState();
  const [userId, setUserId] = React.useState("default");

  const onUploadExample = (data, filename) => {
    // Let's open the mapping UI
    setData(data);
    setFileName(filename);
    setState('mapping');
  };

  const onDoneExample = (data) => {
    alert('Mapping complete!');
    setData(data);
    setState('preview');
  };

  return (
    <GlueStick
      user={userId}
      stage={state}
      data={data}
      filename={filename}
      onUpload={onUploadExample}
      onDone={onDoneExample}
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
