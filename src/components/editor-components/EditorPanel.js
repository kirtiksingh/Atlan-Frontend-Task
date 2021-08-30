import { useContext } from "react";
import MainContext from "../../MainContext";
import { queryDataAlt as queryData } from "../../assets/data/data";
import { queryData2 } from "../../assets/data/data";


const EditorPanel = () => {
  const { query, setQueryHistory, setQuery } = useContext(MainContext);

  const runQuery = () => {
    if (query.trim() === "") {
      alert(
        "Oops, that was a Null Query. Please type another query, or select from the ones previously saved."
      );
      return;
    }
    if (query === "SELECT * FROM internetData;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData,
      }));
    } 
    else if (query === "SELECT id, first_name, last_name FROM internetData;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData2,
      }));
    } 
    else {
      alert("Please try the test query.");
    }
    setQueryHistory((prev) => ({
      ...prev,
      history: [...prev.history, query],
    }));
  };

  const saveQuery = () => {
    if (query.trim() === "") {
      alert("Query can't be null");
      return;
    }

    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));
  };

  const clearQuery = () => {
    setQuery("");
  };

  return (
    <div className='editor-panel'>
      <div className='btn primary-btn'>
        <button onClick={() => runQuery()}>
          <span className='fa fa-play me-1'></span>Run
        </button>
      </div>
      <div className='btn secondary-btn'>
        <button onClick={() => saveQuery()}>
          <span className='fa fa-save me-1'></span>Save
        </button>
      </div>
      <div className='btn alert-btn'>
        <button onClick={() => clearQuery()}>
          <span className='fa fa-times me-1'></span>Clear
        </button>
      </div>
    </div>
  );
};

export default EditorPanel;
