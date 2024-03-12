import { useRef, useEffect } from "react";

const DropDownOption = ({
  optionList,
  dropdownChange,
  setShowOptions,
  dropdownRef,
}) => {
  const optionsRef = useRef();

  useEffect(() => {
    const handleClickOutside = () => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setShowOptions]);

  return (
    <div className='options' ref={optionsRef}>
      {Object.entries(optionList).map(([value, label]) => (
        <div key={value} onClick={() => dropdownChange(value)}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default DropDownOption;
