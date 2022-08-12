import React from 'react';

export default function Buttons({ children, operation, onclick }) {
  let classes = `btn btn-${children === '()' ? 'bracket' : children}`;
  classes += operation ? ' operation' : ' number';

  return (
    <button className={classes} onClick={() => onclick(children)}>
      {children}
    </button>
  );
}
