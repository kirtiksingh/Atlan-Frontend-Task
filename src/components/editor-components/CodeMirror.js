import EditorPanel from "./EditorPanel";
import { useContext } from "react";
import MainContext from "../../MainContext";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/addon/display/autorefresh";
import "codemirror/keymap/sublime";
import "codemirror/theme/neo.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/mode/sql/sql";
import "codemirror/keymap/sublime";
import "codemirror/addon/hint/sql-hint.js";

const Editor = () => {
  const { query, setQuery } = useContext(MainContext);

  return (
    <div className='editor'>
      <div className='row'>
        <div className='col-md-8 col-lg-9 col-xl-10 col-12 no-gutters'>
          <CodeMirror
            value={query}
            name='Editor'
            onBeforeChange={(editor, data, value) => setQuery(value)}
            className='code-mirror-wrapper'
            options={{
              lint: true,
              mode: "sql",
              lineNumbers: true,
              keyMap: "sublime",
              matchBrackets: true,
              addModeClass: true,
              showHint: true,
            }}
            aria-label='code-editor'
          />
          <p style={{ fontSize: "0.8rem" }} className='text-2 pt-3 mb-0'>
            <strong>NOTE: </strong>Click on a Previously Saved Query to Begin.
          </p>
        </div>
        <div className='col-md-4 col-lg-3 col-xl-2'>
          <EditorPanel />
        </div>
      </div>
    </div>
  );
};

export default Editor;
