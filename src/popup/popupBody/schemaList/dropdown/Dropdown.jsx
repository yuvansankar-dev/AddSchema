import { useCallback, useRef, useState } from "react";
import "./Dropdown.css";
import DropDownOption from "../dropDownOption/DropDownOption";

const Dropdown = ({ addedSchema, dispatch, schemaData }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentSchemaValue, currentSchemaLable] = addedSchema;
  const dropdownRef = useRef();

  const dropdownChange = useCallback(
    (value) => {
      setShowOptions((pre) => !pre);
      dispatch({
        type: "changeSchema",
        payload: { add: value, remove: currentSchemaValue },
      });
    },
    [currentSchemaValue, dispatch]
  );
  return (
    <div>
      <div className='schema'>
        <div
          className='dropdown'
          onClick={() => setShowOptions((pre) => !pre)}
          ref={dropdownRef}
        >
          <div>{currentSchemaLable}</div>
          <div style={{ rotate: showOptions ? "none" : "180deg" }}>^</div>
        </div>
        <button
          className='remove'
          onClick={() =>
            dispatch({ type: "removeAddedSchema", payload: currentSchemaValue })
          }
        >
          -
        </button>
      </div>
      {showOptions && (
        <DropDownOption
          optionList={schemaData.nonAddedSchemas}
          dropdownChange={dropdownChange}
          setShowOptions={setShowOptions}
          dropdownRef={dropdownRef}
        />
      )}
    </div>
  );
};

export default Dropdown;
