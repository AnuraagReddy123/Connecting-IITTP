import React from 'react';
import classes from './Chatbutton.module.css';
import ChatbotMain from './ChatbotMain';
import { useState } from 'react';

export default function Chatbutton() {
  const [active, setActive] = useState(false);

  const handleChatbot = () => {
    setActive(!active);
  };

  return (
    <div>
      <div>{active && <ChatbotMain />}</div>
      <button className={classes.chatbutton} onClick={handleChatbot} > E</button>
    </div>
  );
}
