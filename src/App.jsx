import { useEffect, useState } from "react";
import "./App.css";
import Popup from "./popup/Popup";

function App() {
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    const popup = document.getElementById("popup-container");
    popup.style.width = openPopup ? "400px" : "0";
  }, [openPopup]);

  return (
    <div className='container'>
      <button onClick={() => setOpenPopup(true)} className='openDialog'>
        Save segment
      </button>
      <Popup setOpenPopup={setOpenPopup} />
    </div>
  );
}

export default App;
