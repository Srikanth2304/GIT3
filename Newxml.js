import React from 'react'
import './style/PopUpBox.css';
import './style/left-aligned-table.css'
import './style/card.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FilesDragAndDrop from './FilesDragAndDrop';


//aligning heading to left

const headingstyle = {
  textAlign: 'left'
}

function Newxml(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" >x</span>
        <div style={{ width: '70%', margin: 'auto' }} >
          <h3 className='mb-3'>Trade Information For Trade ID </h3> 
          <FilesDragAndDrop/>
          
        </div>
      </div>
    </div>
  )
}

export default Newxml
