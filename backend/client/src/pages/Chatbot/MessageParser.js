class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  parse(message) {
    const lowercase = message.toLowerCase();
    
    if (lowercase.includes("hello")) {
      this.actionProvider.helloWorldHandler();
    }

    if (lowercase.includes("is climate change real")) {
      this.actionProvider.handleClimateOption();
    }
    
  }
}

export default MessageParser;
