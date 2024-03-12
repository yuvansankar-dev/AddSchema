import "./PopupHeader.css";
const PopupHeader = ({ setOpenPopup }) => {
  return (
    <div className='popup-header'>
      <div
        onClick={() => {
          setOpenPopup(false);
        }}
      >
        {"<"}
      </div>
      <div>Saving Segment</div>
    </div>
  );
};

export default PopupHeader;
