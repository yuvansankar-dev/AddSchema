import PopupBody from "./popupBody/PopupBody";
import PopupFooter from "./popupFooter/PopupFooter";
import PopupHeader from "./popupHeader/PopupHeader";
import "./Popup.css";
import { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer";

export const Context = createContext();
const Popup = ({ setOpenPopup }) => {
  const [schemaData, dispatch] = useReducer(reducer, initialState);
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchema, setSelectedSchema] = useState();

  return (
    <div className='popup-container' id='popup-container'>
      <Context.Provider value={{ selectedSchema, setSelectedSchema }}>
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
          setSegmentName={setSegmentName}
        />
      </Context.Provider>
    </div>
  );
};

export default Popup;
