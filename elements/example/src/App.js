import React from 'react'

import { FileAcceptor, ColumnMapper } from 'elements'
import 'elements/dist/index.css'

const App = () => {
  const [isMapping, setMapping] = React.useState(false);
  const [data, setData] = React.useState();
  const [filename, setFileName] = React.useState();

  const onUploadExample = (data, filename) => {
    // Let's open the mapping UI
    setData(data);
    setFileName(filename);
    setMapping(true);
  };

  const onDoneExample = () => {
    alert("Mapping complete!");
    setMapping(false);
  };

  if (isMapping)
    return <ColumnMapper data={data} filename={filename} onDone={onDoneExample} schema={{
      "Name": {}
    }}/>

  return <FileAcceptor onUpload={onUploadExample}/>
}

export default App
