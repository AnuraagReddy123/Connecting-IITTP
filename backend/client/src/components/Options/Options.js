import React from 'react';
import classes from './Options.module.css';

const Options = (props) => {
  const options = [
    {
      text: 'Climate Change',
      handler: props.actionProvider.handleClimateOption,
      id: 1,
    },
    { text: 'About Us', handler: () => {}, id: 2 },
    { text: 'What you can do', handler: () => {}, id: 3 },
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
