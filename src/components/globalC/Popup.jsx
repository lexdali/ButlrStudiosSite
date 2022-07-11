import React from 'react'

//Styles
import '../globalC/styles/popup.css'

const Popup = (props) => {
  return (props.trigger) ? (
    <div id="popup">
        <div className="popup-box">
            <button className="popup-close">Close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup