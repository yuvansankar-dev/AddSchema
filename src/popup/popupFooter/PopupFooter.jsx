import axios from "axios";
import "./PopupFooter.css";
import { useCallback, useContext, useMemo } from "react";
import { Context } from "../Popup";

const PopupFooter = ({ segmentName, schemaData, dispatch, setSegmentName }) => {
  const { setSelectedSchema } = useContext(Context);
  const buttonDisable = useMemo(
    () => !(segmentName && Object.keys(schemaData.addedSchemas).length),
    [schemaData.addedSchemas, segmentName]
  );

  const saveClick = async () => {
    const schemaValue = Object.entries(schemaData.addedSchemas).map(
      ([value, label]) => {
        return { [value]: label };
      }
    );
    const data = {
      segment_name: segmentName,
      schema: schemaValue,
    };
    console.log("schemaValue", data);
    axios
      .post(
        "https://addschema-backend.onrender.com/sendData",
        data
      )
      .then((response) => {
        console.log("Response from server:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const clearClick = useCallback(() => {
    setSegmentName("");
    setSelectedSchema("");
    dispatch({ type: "reset" });
  }, [dispatch, setSegmentName, setSelectedSchema]);

  return (
    <div className='popup-footer'>
      <button className='save' onClick={saveClick} disabled={buttonDisable}>
        Save the Segment
      </button>
      <button className='cancel' onClick={clearClick}>
        Clear
      </button>
    </div>
  );
};

export default PopupFooter;
