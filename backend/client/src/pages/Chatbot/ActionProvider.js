// Sets actions on what the chatbot does

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  helloWorldHandler = () => {
    const message = this.createChatbotMessage('Hello I am not self aware', {
      widget: 'options',
    });
    this.setChatBotMessage(message);
  };

  handleClimateOption = () => {
    const message = this.createChatbotMessage(
      'It is a very real problem. Would you like to know more?',
      {
        widget: 'yesno',
      }
    );
    this.setChatBotMessage(message);
  };

  handleAboutUs = () => {
    const message = this.createChatbotMessage(
      'We are a group of 5 working towards helping the environment',
      {
        widget: 'options',
      }
    );
    this.setChatBotMessage(message);
  };

  handleYes = () => {
    const message = this.createChatbotMessage(
      'Our Mother Earth is currently facing a lot of environmental concerns. The environmental problems like  air pollution, urban sprawl, waste disposal, ozone layer depletion,  climate change and many more affect every human, animal, and nation on this planet.. But here we will help you save the environment and also save your money',
      {
        widget: 'options',
      }
    );
    this.setChatBotMessage(message);
  };

  handleStartOver = () => {
    const message = this.createChatbotMessage(
      `Hey I am EnvHelper Ask any questions you have!`,
      {
        widget: 'options',
      }
    );
    this.setChatBotMessage(message);
  };

  setChatBotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}
export default ActionProvider;
