import React from 'react';
import './DragonDetail.css';

function DargonDetail(props) {
  const {header, text} = props;

  return (
    <div>
      <h4>{header}</h4>
      <p>
        {text}
      </p>
    </div>
  );
}

export default DargonDetail;