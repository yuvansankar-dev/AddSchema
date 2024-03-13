import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./AddSchema.css";
import DropDownOption from "../dropDownOption/DropDownOption";
import { Context } from "../../../Popup";

const AddSchema = ({ schemaData, dispatch }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef();

  const { selectedSchema, setSelectedSchema } = useContext(Context);

  const optionList = useMemo(() => {
    const { [selectedSchema]: label, ...optionList } =
      schemaData.nonAddedSchemas;
    return optionList;
  }, [schemaData.nonAddedSchemas, selectedSchema]);

  const dropdownChange = useCallback(
    (value) => {
      setSelectedSchema(value);
      setShowOptions((pre) => !pre);
    },
    [setSelectedSchema]
  );

  const addSchemaClick = useCallback(() => {
    dispatch({
      type: "addNewSchema",
      payload: selectedSchema,
    });
    setSelectedSchema("");
  }, [dispatch, selectedSchema, setSelectedSchema]);

  useEffect(() => {
    if (!schemaData.nonAddedSchemas[selectedSchema]) {
      setSelectedSchema("");
    }
  }, [schemaData.nonAddedSchemas, selectedSchema, setSelectedSchema]);

  return (
    <div>
      <div className='schema'>
        <div
          className='dropdown'
          onClick={() => setShowOptions((pre) => !pre)}
          ref={dropdownRef}
        >
          <div>
            {schemaData.nonAddedSchemas[selectedSchema] ??
              "Add schema to segment"}
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
        <a onClick={() => selectedSchema && addSchemaClick()}>
          + Add schema to segment
        </a>
      </div>
    </div>
  );
};

export default AddSchema;
