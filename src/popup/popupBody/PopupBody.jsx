import { useCallback } from "react";
import "./PopupBody.css";
import SchemaList from "./schemaList/SchemaList";

const PopupBody = ({ schemaData, dispatch, segmentName, setSegmentName }) => {
  const segmentNameChange = useCallback(
    (e) => {
      setSegmentName(e.target.value);
    },
    [setSegmentName]
  );

  return (
    <div className='popup-body'>
      <div>Enter the Name of the segment</div>
      <input
        type='text'
        placeholder='Name of the Segment'
        value={segmentName}
        onChange={segmentNameChange}
      />
      <div>
        To save your segmenr, you need to add the schemas to build the query
      </div>
      <SchemaList schemaData={schemaData} dispatch={dispatch} />
    </div>
  );
};

export default PopupBody;
