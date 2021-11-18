import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './DogPicture';


import BotAvatar from '../../components/BotAvatar/BotAvatar';
import Options from '../../components/Options/Options';
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
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />
    },
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />
    },
  ]
};
export default config;
