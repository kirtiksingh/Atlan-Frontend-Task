import React, { useContext, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/sql/sql";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/hint/sql-hint.js";
// import { GlobalContext } from "../../Context";

const Editor = () => {
  // const { theme, setTheme, query, setQuery } = useContext(GlobalContext);
  const [theme, setTheme] = useState("default");
  const [query, setQuery] = useState("SELECT * FROM Products");

  return (
    <div>
      <CodeMirror
        value={query}
        options={{
          mode: "sql",
          theme: theme,
          lineNumbers: true,
          lint: true,
          matchBrackets: true,
          addModeClass: true,
          showHint: true,
        }}
        name='Editor'
        aria-label='code-editor'
        onBeforeChange={(editor, data, value) => {
          setQuery(value);
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
};

export default Editor;
