import Dropdown from "./dropdown/Dropdown";
import "./SchemaList.css";
import AddSchema from "./addSchema/AddSchema";

const SchemaList = ({ schemaData, dispatch }) => {
  return (
    <div className='schema-list'>
      {Object.entries(schemaData.addedSchemas).map((addedSchema, idx) => (
        <Dropdown
          key={idx}
          addedSchema={addedSchema}
          dispatch={dispatch}
          schemaData={schemaData}
        />
      ))}
      <AddSchema schemaData={schemaData} dispatch={dispatch} />
    </div>
  );
};

export default SchemaList;
