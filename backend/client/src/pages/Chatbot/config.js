import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from '../../components/BotAvatar/BotAvatar';
const config = {
  initialMessages: [
    createChatBotMessage(`Hey I am EnvHelper Ask any questions you have!`),
  ],
  botName: 'EnvHelper',
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
};
export default config;
