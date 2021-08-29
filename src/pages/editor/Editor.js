import React, { useContext, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import { GlobalContext } from "../../Context";


const Editor = () => {
  const { editorTheme, query, setQuery } = useContext(GlobalContext);


  return (
    <div>
      {/* <CodeMirror
        value='<h1>I ♥ react-codemirror2</h1>'
        options={{
          mode: "xml",
          theme: "default",
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {}}
      /> */}
      <CodeMirror
        value={query}
        options={
          {
            mode: "xml",
            // theme: "default",
            theme: editorTheme,
            lineNumbers: true,
          }
        }
        onBeforeChange={(editor, data, value) => {
          setQuery(value);
        }}
        onChange={(editor, data, value) => {
          console.log('controlled', value);
        }}
      />
    </div>
  );
};

export default Editor;
