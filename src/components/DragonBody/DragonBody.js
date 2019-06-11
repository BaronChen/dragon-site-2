import React from 'react';
import DargonBodyBackgroud from './dragon-body.jpg';
import DragonDetail from '../DragonDetail/DragonDetail';
import './DragonBody.css';

const contents = [
  {
    header: '',
    text: ''
  }
]


function DargonBody(props) {
  var styles = {
    width: "1300px",
    height: "625px",
    backgroundImage: `url(${DargonBodyBackgroud})`
  };

  return (
    <div style={styles} className='container'>
      <div className='row' style={{ marginTop: "30px" }} >
        <div className="col-2 offset-4">
          <strong onMouseOver={() => props.selectSection('Dragon Habitats')} >Dragon Habitats</strong>
        </div>
      </div>
      <div className="row" style={{ marginTop: "350px" }}>
        <div className="col-2" >
          <strong onMouseOver={() => props.selectSection('Image Gallery')}>Image Gallery</strong>
        </div>
        <div className="col-6 offset-4" >
          <strong onMouseOver={() => props.selectSection('Dragon Anatomy')}>Dragon Anatomy</strong>
        </div>
      </div>
      <div className='row' style={{ marginTop: "70px" }}  >
        <div className="col-2">
          <strong onMouseOver={() => props.selectSection('Dragon Diet')}>Dragon Diet</strong>
        </div>
      </div>
      <div className='row' style={{ marginTop: "120px" }}  >
        <div className="col-2 offset-8">
          <strong onMouseOver={() => props.selectSection('Dragon Behaviour')}> Dragon Behaviour</strong>
        </div>
      </div>
    </div>

  );
}

export default DargonBody;