import React from 'react'

import { GlueStick } from 'elements'
import 'elements/dist/index.css'

const App = () => {
  const [state, setState] = React.useState("upload");
  const [data, setData] = React.useState();
  const [filename, setFileName] = React.useState();

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



  return (
    <GlueStick
      stage={state}
      data={data}
      filename={filename}
      onUpload={onUploadExample}
      onDone={onDoneExample}
      schema={{ 'Name': {}}}
    />)
}

export default App
