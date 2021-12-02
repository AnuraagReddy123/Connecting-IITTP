// Page to set the widgets of the chatbot

import { createChatBotMessage } from 'react-chatbot-kit';

import BotAvatar from '../../components/BotAvatar/BotAvatar';
import Options from '../../components/Options/Options';
import YesNo from '../../components/Options/YesNo';
const config = {
  initialMessages: [
    createChatBotMessage(`Hey I am EnvHelper Ask any questions you have!`, {
      widget: 'options',
    }),
  ],
  botName: 'EnvHelper',
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />
    },
    {
      widgetName: 'yesno',
      widgetFunc: (props) => <YesNo {...props} />
    },
  ]
};
export default config;
