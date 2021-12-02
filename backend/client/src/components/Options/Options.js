import React from 'react';
import classes from './Options.module.css';

const Options = (props) => {
  const options = [
    {
      text: 'Climate Change',
      handler: props.actionProvider.handleClimateOption,
      id: 1,
    },
    { text: 'About Us', 
      handler: props.actionProvider.handleAboutUs, 
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

export default Options;
