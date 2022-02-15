import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', height: '800px', padding:'6px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;