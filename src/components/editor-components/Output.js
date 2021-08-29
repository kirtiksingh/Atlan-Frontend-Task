import { useContext, useState } from "react";
import MainContext from "../../MainContext";
import ColumnDetails from "./ColumnDetails";
import Table from "./Table";

const Output = () => {
  const [tab, setTab] = useState(0);
  const { queryHistory } = useContext(MainContext);

  return (
    <div className='query-results'>
      {queryHistory.outputData.length > 0 ? (
        <>
          <div className='tab-bar'>
            <span
              className={`tabs ${tab === 0 ? "active" : ""} cursor-pointer`}
              onClick={() => setTab(0)}
            >
              Table
            </span>
            <span
              className={`tabs ${tab === 1 ? "active" : ""} cursor-pointer`}
              onClick={() => setTab(1)}
            >
              Columns
            </span>
          </div>
          <div className='query-details'>
            <p className='text-2'>
              Showing{" "}
              <span>
                {tab === 0
                  ? queryHistory.outputData.length
                  : Object.keys(queryHistory.outputData[0]).length}
              </span>{" "}
              results
              <span style={{ fontSize: "0.8rem" }} className='text-1'>
                {" "}
                (0.03s)
              </span>
            </p>
            <div className='export-btn'>
              <button>
                Export <span className='fa fa-download'></span>
              </button>
            </div>
          </div>
          {tab === 0 ? (
            <Table result={queryHistory.outputData}></Table>
          ) : (
            <ColumnDetails result={queryHistory.outputData} />
          )}
        </>
      ) : (
        <div className='placeholder-text'>
          <span className='fa fa-play'></span>
          <p>Run Something &#38; Your Output Shall Appear!</p>
        </div>
      )}
    </div>
  );
};

export default Output;
