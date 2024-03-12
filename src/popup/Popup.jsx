import PopupBody from "./popupBody/PopupBody";
import PopupFooter from "./popupFooter/PopupFooter";
import PopupHeader from "./popupHeader/PopupHeader";
import "./Popup.css";
import { useReducer, useState } from "react";
import { initialState, reducer } from "../reducer";

const Popup = ({ setOpenPopup }) => {
  const [schemaData, dispatch] = useReducer(reducer, initialState);
  const [segmentName, setSegmentName] = useState("");
  return (
    <div className='popup-container' id='popup-container'>
      <PopupHeader setOpenPopup={setOpenPopup} />
      <PopupBody
        schemaData={schemaData}
        dispatch={dispatch}
        segmentName={segmentName}
        setSegmentName={setSegmentName}
      />
      <PopupFooter
        dispatch={dispatch}
        schemaData={schemaData}
        segmentName={segmentName}
      />
    </div>
  );
};

export default Popup;
