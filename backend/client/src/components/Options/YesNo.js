import React from 'react';
import classes from './Options.module.css';

const YesNo = (props) => {
  const options = [
    {
      text: 'Yes',
      handler: props.actionProvider.handleYes,
      id: 1,
    },
    { text: 'No', 
      handler: props.actionProvider.handleStartOver, 
      id: 2 
    },
  ];

  const buttonsMarkup = options.map((options) => (
    <button
      key={options.id}
      onClick={options.handler}
      className={classes.optionButton}
    >
      {options.text}
    </button>
  ));

  return <div className={classes.optionsContainer}>{buttonsMarkup}</div>;
};

export default YesNo;
