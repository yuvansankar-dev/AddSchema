import axios from "axios";
import "./PopupFooter.css";
import { useCallback, useMemo } from "react";

const PopupFooter = ({ segmentName, schemaData }) => {
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
        "https://webhook.site/c7ecffc1-ceaf-4937-967d-b915581003fe",
        schemaValue
      )
      .then((response) => {
        console.log("Response from server:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className='popup-footer'>
      <button className='save' onClick={saveClick} disabled={buttonDisable}>
        Save the Segment
      </button>
      <button className='cancel'>Cancel</button>
    </div>
  );
};

export default PopupFooter;
