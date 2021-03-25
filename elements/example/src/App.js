import React from 'react'

import { ColumnMapper, FileAcceptor, FilePreview } from 'elements'
import 'elements/dist/index.css'

const App = () => {
  const [state, setState] = React.useState("upload");
  const [data, setData] = React.useState();
  const [filename, setFileName] = React.useState();
  const [userId, setUserId] = React.useState("default");

  const onUploadExample = (data, filename) => {
    // Let's open the mapping UI
    setData(data);
    setFileName(filename);
    setState("mapping");
  };

  const onDoneExample = (data) => {
    alert("Mapping complete!");
    setData(data);
    setState("preview");
  };

  if (state === "mapping")
    return <ColumnMapper user={userId} data={data} filename={filename} onDone={onDoneExample} schema={{
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
    }}/>

  if (state === "preview")
    return <FilePreview data={data}/>

  return <FileAcceptor user={userId} onUpload={onUploadExample}/>
}

export default App
