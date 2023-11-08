import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "LearningBot" ,
  initialMessages: [createChatBotMessage(`Hi there, how can i help you ?`)],
  customStyles: {
    botMessageBox: {
        backgroundColor: "#376B7E" ,
    },
    chatButton: {
        backgroundColor: "#376B7E", 
    },
  },
}

export default config