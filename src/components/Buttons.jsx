import React from 'react';
import './buttons.scss';

export default function Buttons({ children, operation, onclick }) {
  let classes = 'button ';
  classes += operation ? ' operation' : 'number';

  return (
    <button className={classes} onClick={() => onclick(children)}>
      {children}
    </button>
  );
}
