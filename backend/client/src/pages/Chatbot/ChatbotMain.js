import { Chatbot } from 'react-chatbot-kit';
import classes from './ChatbotMain.module.css';
import 'react-chatbot-kit/build/main.css';
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

export default function ChatbotMain() {
  return (
    <div className={classes.chatbotHeader}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}
