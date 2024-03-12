import { useCallback, useMemo, useRef, useState } from "react";
import "./AddSchema.css";
import DropDownOption from "../dropDownOption/DropDownOption";

const AddSchema = ({ schemaData, dispatch }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState();
  const dropdownRef = useRef();

  const optionList = useMemo(() => {
    const { [selected]: label, ...optionList } = schemaData.nonAddedSchemas;
    !label && setSelected();
    return optionList;
  }, [schemaData.nonAddedSchemas, selected]);

  const dropdownChange = useCallback((value) => {
    setSelected(value);
    setShowOptions((pre) => !pre);
  }, []);

  const addSchemaClick = useCallback(() => {
    dispatch({
      type: "addNewSchema",
      payload: selected,
    });
    setSelected("");
  }, [dispatch, selected]);

  return (
    <div>
      <div className='schema'>
        <div
          className='dropdown'
          onClick={() => setShowOptions((pre) => !pre)}
          ref={dropdownRef}
        >
          <div>
            {selected
              ? schemaData.nonAddedSchemas[selected]
              : "Add schema to segment"}
          </div>
          <div style={{ rotate: showOptions ? "none" : "180deg" }}>^</div>
        </div>
      </div>

      {showOptions && (
        <DropDownOption
          optionList={optionList}
          dropdownChange={dropdownChange}
          setShowOptions={setShowOptions}
          dropdownRef={dropdownRef}
        />
      )}

      <div className='addschema-button'>
        <a onClick={() => selected && addSchemaClick()}>
          + Add schema to segment
        </a>
      </div>
    </div>
  );
};

export default AddSchema;
