import React from 'react'

import { ColumnMapper, FileAcceptor, FilePreview } from 'elements'
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

  if (state === "mapping")
    return <ColumnMapper data={data} filename={filename} onDone={onDoneExample} schema={{
      "Name": {}
    }}/>

  if (state === "preview")
    return <FilePreview data={data}/>

  return <FileAcceptor onUpload={onUploadExample}/>
}

export default App
